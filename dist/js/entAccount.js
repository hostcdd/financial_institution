<<<<<<< HEAD
/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"../../js/vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",entAccount:"../../js/module/entAccount",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery","mustache","public","entAccount","validate"],function($,mustache,public,entAccount,validate){public.getHtml("entAccount",function(html){var outPut=mustache.render(html);$("#test1-page").html(outPut)})})});
=======
$(function(){alert("this is test1")});
>>>>>>> c922a46894fb586ff52afcfd275d2110fef6a745
