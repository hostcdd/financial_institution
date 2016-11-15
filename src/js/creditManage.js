$(function(){
	// 初始化日期控件
  $('.form_datetime').datetimepicker({
      language:  'zh-CN',
      format: 'yyyy-mm-dd',
      weekStart: 1,
      todayBtn:  1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
  });

  $(".supplier a").click(function(){
    $(this).toggleClass("supplier-sel");
  });

  $("#moreSupplier").click(function(){
  	$(".supplier").toggleClass("supplier-height");
  	$(this).text()=="更多"?$(this).text("收起"):$(this).text("更多");
  });
})
