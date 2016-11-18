// 菜单的地址
var URLOBJ = {
		/********************
		 * 企业登录模块
		 *********************/
		//企业登录
		login:"./login.html",
		//首次登陆修改密码
		changePassword:"./changePassword.html",
		//修改密码成功
		/*没写------*/
		//忘记密码
		forgetPassword:"./forgetPassword.html",
		/********************
		 * 授信管理模块
		 *********************/
		//授信处理
		creditManage: "./creditManage.html",
		//授信审核
		creditApproval: "./creditApproval.html",
		//授信记录
		creditRecord: "./creditRecord.html",
		//授信审核详情
		creditApprovalDetail: "./creditApprovalDetail.html",
		//申请处理
		financeManage: "./financeManage.html",
		//协议审核
		financeApproval: "./financeApproval.html",
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
		/********************
		 * 融资管理模块
		 *********************/
		//融资协议审核
		financeAgreementCheck:"./financeAgreementCheck.html",
		//签署合同
		financeAgreement:"./financeAgreement.html",
		//融资记录
		financeRecord: "./financeRecord.html",
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
	/**********************************************************/
		//产品查看
		productDetail:"./productDetail.html",
		//授信处理详情
		creditDetail:"./creditDetail.html",
		/********************
		 * 结算管理模块
		*********************/
		//放款处理
		accountManage:"./accountManage.html",
		//付款单
		payList:"./payList.html",
		//付款信息
		payInfo:"./payInfo.html",
		//回款处理
		returnMoneyProcess:"./returnMoneyProcess.html",
		//资金流水
		financeWater:"./financeWater.html",
		//企业银行流水查询
		bankWater:"./bankWater.html",
		//到处明细模板
		/*没写------*/
		/********************
		 * 合同管理模块
		 *********************/
		//合同管理
		contractManageBusiness:"./contractManageBusiness.html",
		//业务合同详情
		businessContractDetail:"./businessContractDetail.html",
		//单笔融资合同详情
		/*没写--------------*/
		/********************
		 * 企业审核模块
		 *********************/
		//企业审核
		entApproval: "./entApproval.html",
		//融资企业信息
		/*没写------*/
	/*************************************************/
	};

// 修改iframeUrl
function changeFrameUrl(url){
	$("iframe").attr("src",url);
}
