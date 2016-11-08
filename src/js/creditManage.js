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
            "creditManage":"../../js/module/creditManage",
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
    require(["jquery","mustache","public","creditManage","validate"],function ($, mustache,public,creditManage,validate) {
        public.getHtml("creditManage",function(html){
            var outPut=mustache.render(html);
            console.log(outPut);
            $("#content-page").html(outPut);
            //test2.init(mustache);
        });
    });
});

