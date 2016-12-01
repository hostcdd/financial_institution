$(function(){
// 初始化日期控件
$(".form_datetime").datetimepicker({language:"zh-CN",format:"yyyy-mm-dd",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0}),
// 选中或取消选中供应商时添加或删除效果
$(".supplier a").click(function(){$(this).toggleClass("supplier-sel")}),
// 展开或显示供应商
$("#moreSupplier").click(function(){$(".supplier").toggleClass("supplier-height"),"更多"==$(this).text()?$(this).text("收起"):$(this).text("更多")}),
// 跳转到详情
$(".go-detail").click(function(){top.changeFrameUrl(top.URLOBJ.creditDetail)})});