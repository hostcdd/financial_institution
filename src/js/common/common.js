// 菜单的地址
var URLOBJ = {
		//授信处理
		creditManage: "./creditManage.html",
		//授信审核
		creditApproval: "./creditApproval.html",
		//授信记录
		creditRecord: "./creditRecord.html",
		//申请处理
		financeManage: "./financeManage.html",
		//协议审核
		financeApproval: "./financeApproval.html",
		//融资记录
		financeRecord: "./financeRecord.html",
		//放款处理
		loanManage: "./loanManage.html",
		//回款处理
		receiveManage: "./receiveManage.html",
		//资金流水
		capitalFlow: "./capitalFlow.html",
		//银行流水查询
		bankFlow: "./bankFlow.html",
		//业务合同
		businessContract: "./businessContract.html",
		//融资合同
		financeContract: "./financeContract.html",
		//企业审核
		entApproval: "./entApproval.html",
		//基本信息
		basicInfo: "./basicInfo.html",
		//安全中心
		securityCenter: "./securityCenter.html",
		//用户管理
		userManage: "./userManage.html",
		//费用管理
		costManage: "./costManage.html",
		//产品开通
		productAdd: "./productAdd.html",
		//新增和修改用户信息
		userAdd: "./userAdd.html",
		//查看用户信息
		userDetail: "./userDetail.html",
		//修改密码
		userPwdMod: "./userPwdMod.html",
		//融资协议审核
		financeAgreementCheck:"./financeAgreementCheck.html",
		//融资记录详情--待处理
		financeRecordPending:"./financeRecordPending.html",
		//融资记录详情--待签署
		financeRecordNoSigned:"./financeRecordNoSigned.html",
		//融资记录详情--履行中
		financeRecordPerforming:"./financeRecordPerforming.html",
		//融资记录详情--已拒绝（处理时）
		financeRecordRefusedPro:"./financeRecordRefused.html",
		//融资记录详情--已拒绝（审核时）
		financeRecordRefusedCheck:"./financeRecordRefusedCheck.html",
		//处理明细
		processDetail:"./processDetail.html",
		//产品查看
		productDetail:"./productDetail.html",
		//授信处理详情
		creditDetail:"./creditDetail.html",
		/********************
		 * 结算管理
		*********************/
		//放款处理
		accountManage:"./accountManage.html",
		//付款单
		payList:"./payList.html",
		//付款信息
		payInfo:"./payInfo.html",
	};

// 修改iframeUrl
function changeFrameUrl(url){
	$("iframe").attr("src",url);
}
