$(function(){$("#navBar a").click(function(){var url=$(this).attr("data-url");$("iframe").attr("src",url)});
// 调整iframe的高度
var headerHeight=$("#headerTitle1").height(),windowHeight=$(window).height(),$content=$("#content-page"),contentWidth=$content.width();$content.height(windowHeight-headerHeight-50+"px").width(contentWidth-4+"px"),
// 将url填入页面
function(){for(key in URLOBJ){var $menu=$("#"+key);$menu.length>0&&$menu.attr("data-url",URLOBJ[key])}}(),
// 点击显示子菜单
$("#navBar .parentMenu").click(function(){var $targetUl=$(this).next();$targetUl.hasClass("hidden")?($("#navBar .parentMenu+ul").addClass("hidden"),$targetUl.removeClass("hidden")):$targetUl.addClass("hidden")})});