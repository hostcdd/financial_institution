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
            "securityCenter":"../../js/module/securityCenter",
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
    require(["jquery","mustache","public","securityCenter","validate"],function ($, mustache,public,securityCenter,validate) {
        public.getHtml("securityCenter",function(html){
            var outPut=mustache.render(html);
            $("#securityCenter-page").html(outPut);
            //test1.init(mustache);

        });
    });
});

