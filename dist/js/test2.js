/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"../../js/vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",creditManage:"../../js/module/creditManage",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery","mustache","public","creditManage","validate"],function($,e,a,t,s){a.getHtml("creditManage",function(a){var t=e.render(a);$("#content-page").html(t)})})});