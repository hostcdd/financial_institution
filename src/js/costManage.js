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
});