/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"../../js/vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",entAccount:"../../js/module/entAccount",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery"],function($){$("#navBar a").click(function(){var e=$(this).attr("data-url");$("iframe").attr("src",e)});
// 调整iframe的高度
var e=$("#headerTitle1").height(),t=$(window).height(),a=$("#content-page"),o=a.width();a.height(t-e-50+"px").width(o-4+"px")})});