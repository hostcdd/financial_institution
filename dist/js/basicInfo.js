<<<<<<< HEAD
/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"../../js/vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",basicInfo:"../../js/module/basicInfo",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery","mustache","public","basicInfo","validate"],function($,mustache,public,basicInfo,validate){public.getHtml("basicInfo",function(html){var outPut=mustache.render(html);$("#basicInfo-page").html(outPut)})})});
=======
$(function(){alert("this is test3")});
>>>>>>> c922a46894fb586ff52afcfd275d2110fef6a745
