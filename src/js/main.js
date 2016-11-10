$(function(){   
    $("#navBar a").click(function(){
        var url = $(this).attr("data-url");
        $("iframe").attr("src",url);
    });

    // 调整iframe的高度
    var headerHeight = $("#headerTitle1").height();
    var windowHeight = $(window).height();
    var $content = $("#content-page");
    var contentWidth = $content.width();
    $content.height((windowHeight-headerHeight-50)+"px").width((contentWidth-4)+"px");

    // 将url填入页面
    (function(){
        for(key in URLOBJ){
            var $menu = $("#"+key);
            if($menu.length>0){
                $menu.attr("data-url",URLOBJ[key]);
            }
        }
    })();
});

