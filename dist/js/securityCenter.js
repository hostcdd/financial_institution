/**
 * Created by Administrator on 2016/6/21.
 */
define(function(){require.config({waitSeconds:0,baseUrl:"js",paths:{jquery:"../../js/vendor/jquery.min",bootstrap:"../../js/vendor/bootstrap.min",mustache:"../../js/vendor/mustache.min",public:"../../js/common/public",securityCenter:"../../js/module/securityCenter",validate:"../../js/common/validate",api:"../../js/common/api",hash:"../../js/vendor/hash"},shim:{bootstrap:{deps:["jquery"],exports:"bootstrap"},hash:{deps:["jquery"],exports:"hash"}}}),require(["jquery","mustache","public","securityCenter","validate"],function($,e,t,r,s){t.getHtml("securityCenter",function(t){var r=e.render(t);$("#securityCenter-page").html(r)})})});