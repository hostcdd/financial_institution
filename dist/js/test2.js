<<<<<<< HEAD
/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",test1:"../../js/module/test2",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery","mustache","public","test2","validate"],function($,mustache,public,test2,validate){public.getHtml("test2",function(html){var outPut=mustache.render(html);$("#content-page").html(outPut)})})});
=======
define(["mustache"],function(mustache){alert("this is test2")});
>>>>>>> c922a46894fb586ff52afcfd275d2110fef6a745
