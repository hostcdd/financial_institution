$(function(){$("#navBar a").click(function(){var url=$(this).attr("data-url");$("iframe").attr("src",url)});
// 调整iframe的高度
var headerHeight=$("#headerTitle1").height(),windowHeight=$(window).height(),$content=$("#content-page"),contentWidth=$content.width();$content.height(windowHeight-headerHeight-50+"px").width(contentWidth-4+"px")});