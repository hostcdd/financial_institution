//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	// 编译less
    less = require('gulp-less'),
	// 压缩代码
	uglify = require('gulp-uglify'),
	// 合并代码
	concat = require('gulp-concat'),
	// 在修改的文件后缀加上随机数，避免页面缓存
	rev = require('gulp-rev-append'),
	// 图片压缩
	imagemin = require('gulp-imagemin'),
	// 深度压缩图片
	pngquant = require('imagemin-pngquant'),
	// gulp-cache 和 gulp-imagemin配合，只压缩修改的图片
    cache = require('gulp-cache'),
	connect = require('gulp-connect'),
	// 压缩html
	htmlmin = require('gulp-htmlmin'),
	// 自动刷新浏览器
	livereload = require('gulp-livereload'),
	//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
	// 编译sass,插件装不上,用less吧。。。。
	//sass = require('gulp-sass');
	// 自动刷新浏览器
	//browserSync = require('browser-sync').create();
	
var globs = {
    jsmin:'src/js/*.js',
    jsminCommon:'src/js/common/*.js',
    testPngquant:'src/images/*',
	testLess:"src/less/*.less",
	testHtmlmin:"src/html/*"
};

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

//定义一个testLess任务，用于编译less（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/*.less') //该任务针对的文件
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});

//定义一个jsmin任务，用于压缩js（自定义任务名称）
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js'])
        .pipe(uglify({
			//mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: false,
            //mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
			compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
		}))
        .pipe(gulp.dest('dist/js'))
		.pipe(livereload());
});
//定义一个jsmin任务，用于压缩js（自定义任务名称）
gulp.task('jsminCommon', function () {
    gulp.src(['src/js/common/*.js'])
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: false,
            //mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('dist/js/common'))
        .pipe(livereload());
});

//使用gulp-concat合并javascript文件，减少网络请求。
//先合并代码，再压缩
//合并和压缩一起用有点问题，暂时不用合并
gulp.task('testConcat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/all/js'));
});

//使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
gulp.task('testRev', function () {
    gulp.src('src/html/**/*.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/html'));
});

//使用gulp-imagemin压缩图片文件（包括PNG、JPEG、GIF和SVG图片）
gulp.task('testImagemin', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
			optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化))
        }))
		.pipe(gulp.dest('dist/images'));
});

//使用gulp-imagemin和imagemin-pngquant深度压缩图片
gulp.task('testPngquant', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/images'))
		.pipe(livereload());
});

// gulp-cache 和 gulp-imagemin配合，只压缩修改的图片
gulp.task('testImageminCache', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'))
		.pipe(livereload());
});

// 使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作。
// 不好用
gulp.task('testHtmlmin', function(){
	var opts = {
		removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	};
	gulp.src('src/html/*.html')
		.pipe(htmlmin(opts))
		.pipe(gulp.dest('dist/html'))
        .pipe(livereload());
});

// 当监听文件发生变化时，浏览器自动刷新页面
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
});

// sass编译
gulp.task('sassfile',function(){
    gulp.src('./src/sass/*.scss')
		.pipe( sass() )
		.pipe( gulp.dest( './dist/css' ))
		.pipe(livereload());;
});

gulp.task('build', ['testLess','jsmin','testPngquant','testRev','testHtmlmin','jsminCommon']);
gulp.task('watch', ['build'], function () {
    // 监听有改变自动刷新浏览器
	livereload.listen();
	
    gulp.watch(globs.jsmin, ['jsmin']);
    gulp.watch(globs.jsminCommon, ['jsminCommon']);

    gulp.watch(globs.testLess, ['testLess']);

    gulp.watch(globs.testPngquant, ['testPngquant']);
		
	gulp.watch(globs.testHtmlmin, ['testHtmlmin']);

    
});

gulp.task('default', function () {
    gulp.start('watch');
    gulp.start('webserver');
});
