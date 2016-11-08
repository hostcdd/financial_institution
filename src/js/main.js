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
            "entAccount":"../../js/module/entAccount",
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
    require(["jquery"],function ($) {
        $("#navBar a").click(function(){
            var url = $(this).attr("data-url");
            $("iframe").attr("src",url);
        });

        // 调整iframe的高度
        var headerHeight = $("#headerTitle1").height();
        var windowHeight = $(window).height();
        var $content = $("#content-page");
        var contentWidth = $content.width();
        $content.height((windowHeight-headerHeight-50)+"px").width((contentWidth-4)+"px");

    });
});

