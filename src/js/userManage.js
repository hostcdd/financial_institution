$(function(){
	// 点击新增，跳到新增用户页面
	$("#addUser").click(function(){
		top.changeFrameUrl(top.URLOBJ.userAdd);
	});
	// 点击用户名，跳到详情页面
	$("tr a").click(function(){
		top.changeFrameUrl(top.URLOBJ.userDetail);
	});
	// 修改密码
	$("#userPwdMod").click(function(){
		top.changeFrameUrl(top.URLOBJ.userPwdMod);
	});
});
