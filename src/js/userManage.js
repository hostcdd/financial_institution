$(function(){
	// 点击新增，跳到新增用户页面
	$("#addUser").click(function(){
		top.changeFrameUrl(top.URLOBJ.userAdd);
	});
});
