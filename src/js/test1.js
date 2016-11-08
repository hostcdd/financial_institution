/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){
    require.config({
        waitSeconds: 0,
        baseUrl: 'js',
        paths: {
            "jquery": "../../js/vendor/jquery.min",
            "bootstrap":"../../js/vendor/bootstrap.min",
            "mustache": "../../js/vendor/mustache.min",
            "public": "../../js/common/public",
            "test1":"../../js/module/test1",
            "validate":"../../js/common/validate",
            "api":"../../js/common/api",
            "hash":"../../js/vendor/hash"
        },
        shim:{
            "bootstrap":{
                deps:["jquery"],
                exports:"bootstrap"
            },
            "hash":{
                deps:["jquery"],
                exports:"hash"
            }
        }
    });
    require(["jquery","mustache","public","test1","validate"],function ($, mustache,public,test1,validate) {
        public.getHtml("test1",function(html){
            var outPut=mustache.render(html);
            $("#test1-page").html(outPut);
            //test1.init(mustache);

        });
    });
});

