define(["public","jquery"],function(public,$){
//SIT环境
//var baseUrl = "https://fen.gomemyf.com/fen-sit";
//UAT环境
//var baseUrl="https://fen.gomemyf.com/fen-uat";
//生产环境
// var baseUrl="https://fen.gomemyf.com/fen-api";
//培训环境
// var baseUrl="https://fen.gomemyf.com/fen-train";
//获取授权承诺书内容
function getProtocolAuthorized(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/showAuthorizedProtocol_h5",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET",contentType:"application/x-www-form-urlencoded"});return promise}
//快捷支付协议
function protocolQuickPay(){return baseUrl+"/showQuickPayProtocol_h5"}
//用户注册协议
function protocolLogin(){return baseUrl+"/showLoginProtocol_h5"}
//消费分期协议 //需要序列号
function protocolConsume(){return baseUrl+"/showProtocol_h5"}
//自动扣款协议
function protocolAutoDebit(){return baseUrl+"/rest/showAutoDebitProtocol_h5"}
//授权协议书
function protocolAuthorized(){return baseUrl+"/rest/showAuthorizedProtocol_h5"}function protocolAuthorizedNo(){return baseUrl+"/rest/showAuthorizedProtocol"}
//验证是否注册过F1005
function isRegistered(data){var promise=$.ajax({url:baseUrl+"/verifyMobile/",dataType:"json",data:data,type:"POST"});return promise}
//登录F1004
function loginApi(data){var promise=$.ajax({url:baseUrl+"/oauth/token",data:data,type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//注册F1003
function register(data){var promise=$.ajax({url:baseUrl+"/register/",data:data,type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//注册短信验证码F1002
function verificationCode(data){var promise=$.ajax({url:baseUrl+"/vcode/mobile/",data:data,type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//主动还款验证码 F1002
function payActiveCode(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/vcode/mobile/",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//重置密码短信验证码F1007
function resetVerificationCode(data){var promise=$.ajax({url:baseUrl+"/send/resetverifycode/",data:data,type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//忘记密码F1008
function modifyPwd(data){var promise=$.ajax({url:baseUrl+"/passwordReset/",dataType:"json",data:data,type:"POST",contentType:"application/x-www-form-urlencoded"});return promise}
//验证是否有申请资格
function applicationQualify(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/user/business/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET"});return promise}
//用户退出F1009
function userLogOut(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/logout/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},contentType:"application/x-www-form-urlencoded",dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//提交调整的还款日结果F3001
function adjustResult(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contract/update/repay_date/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},contentType:"application/x-www-form-urlencoded",dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//试算分期F3002
function loanCalculator(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/instalment/trial/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},contentType:"application/json",dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//获取所有城市F1205
function allCity(){var promise=$.ajax({url:baseUrl+"/cities/all/",type:"GET",dataType:"json"});return promise}
//增加skuF3101
function addSku(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/good/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET",data:data,dataType:"json"});return promise}
//获取版本号
function getVersion(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/getConfigVersion/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET",dataType:"json"});return promise}
//开展业务的城市列表F1209
function getCity(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/cities/event/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET",dataType:"json"});return promise}
//分期期数F1210
function repayStage(data){var promise=(public.getLocalStorage("myfToken"),$.ajax({url:baseUrl+"/finance/terms/",data:data,type:"GET",dataType:"json"}));return promise}
//身份认证--添加银行卡-----F1203
function addBankCard(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/bankCard/bind/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},
// dataType: "json",
data:JSON.stringify(data),type:"POST"});return promise}
//身份认证页面-----获取验证码
function getIdenCode(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/identityCertify/verifyCode/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//身份认证页面----点击下一步F1203
function idenClickNext(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/identityCertify/bind/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//申请进度查询F2001
function applyRecords(type){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/records/"+type+"/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//账单详情查询 ---F2007
function applyDetailes(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/record/detail/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"GET"});return promise}
//获取银行卡列表---F1201
function getCardList(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/user/bankcards/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//添加银行卡 获取验证码F1202
function addCarGetReg(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/bankCard/verifyCode/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"POST"});return promise}
//更换银行卡F3004
function changeCard(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/bankCard/default/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:data,type:"POST"});return promise}
//获取默认银行卡F1214
function getDefaultCard(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/bankCard/default/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET"});return promise}
//获取用户基本信息----F1204
function getUserInfo(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/user/info/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//收件箱页面----获取未读消息F4001
function inboxMsg(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/message/unread/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//收件箱页面----获取活动消息列表 F4002
function inboxActive(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/message/activities/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//收件箱页面----获取通知列表F4003
function inboxInform(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/message/notifications/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:data,type:"GET"});return promise}
//修改登录密码页----点击完成修改登录密码接口F1006
function adjustPassword(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/update/password/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",contentType:"application/x-www-form-urlencoded",data:data,type:"POST"});return promise}
//获取明细金额  F2004
function getRepayAmount(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contracts/amount/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//获取合同列表  F2005
function payDetail(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contracts/all/",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//获取有效合同列表
function getValidList(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contracts/valid/",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//合同详情查询  F2006
function contractDetail(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contract/detail/",
//url:'../../dist/json/contact.json',
beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"GET"});return promise}
//计算还款金额  F3113
function countPayAmount(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contract/repayment/amount/calculate/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"GET"});return promise}
//用户反馈页----F4004
function feedback(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/feedback/",dataType:"json",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"POST"});return promise}
//获取付款码F3108
function getPayCode(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/apply/payment/",dataType:"json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"GET"});return promise}/*补充资料*/
function addMaterial(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/patch/",dataType:"json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"GET"});return promise}function contractsList(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/contracts/flexiblePaymentBag/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//补充资料页面初始化-F3110
function getRequestList(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/getRequestInformationList/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//主动还款页面----点击确定接口F3005
function repay(type,data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/repay/initiative/"+type+"/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:data,type:"POST"});return promise}
//主动还款页面----获取手机验证码接口
function repayTelCode(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/repay/repayActive-input/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",data:JSON.stringify(data),type:"POST"});return promise}
//主动还款页面----获取信息
function getRepayInfo(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"",dataType:"json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"GET"});return promise}
//基本信息----保存用户基本信息F3007
function saveUserInfo(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/save/user/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:JSON.stringify(data),dataType:"json",type:"POST"});return promise}
//基本信息----保存用户联系人信息F3008
function saveContactInfo(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/save/contacts/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:JSON.stringify(data),dataType:"json",type:"POST"});return promise}
//基本信息--专员认证--获取订单申请编码F3109
function getLoanApplySerialNo(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/serial/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET",dataType:"json"});return promise}
//基本信息--专员认证--审核确认-F3011
function getLoanApplyReview(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/review/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//基本信息--拍照上传--提交-F1207
function uploadPicture(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/upload/picture/",contentType:"multipart/form-data",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:JSON.stringify(data),dataType:"json",type:"POST"});return promise}
//聚信立--补充资料 获取手机号，查询服务商类型F5001
function additionalDataGetMsg(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/mobileOperator/type",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"GET"});return promise}
//聚立信---补充资料 提交手机号和服务密码 F5002
function additionalDatasubMit(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/mobileOperator/submit",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//聚立信---补充资料 重置密码时获取验证码 F5003
function additionalDataGetCode(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/mobileOperator/password/resetCode/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//聚立信---补充资料 重置密码F5004
function additionalDataResetPwd(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/mobileOperator/password/reset/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:JSON.stringify(data),dataType:"json",type:"POST"});return promise}
//获取调用微信接口的签名数据
function getWxData(config){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/wx/signature/",data:config,type:"POST",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},contentType:"application/x-www-form-urlencoded"});return promise}function imgUpUrl(){var url=baseUrl+"/uploadBase64Picture";return url}
//分期选购页面-计算接口--F3003
function loanCalculate(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/instalment/calculate/",contentType:"application/json",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:JSON.stringify(data),dataType:"json",type:"POST"});return promise}
//获取灵活还款包--F3103
function getFlexible(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/pay_bag/flexible",contentType:"application/x-www-form-urlencoded/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//确认分期F3009
function confirmLoan(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/instalment/confirm/",contentType:"application/json",data:JSON.stringify(data),beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"POST"});return promise}
//专员认证-获取商品信息--F3104
function getGoodsInfo(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/instalment/goods/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//专员认证-获取分期计划--F3105
function getloanPlan(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/instalment/loan/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//专员认证-获取基本信息--F3106
function getBaseInfo(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/user/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//专员认证-联系人信息--F3107
function getconcatInfo(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/contacts/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//微信上传照片，将照片取入服务器
function wxUploadImg(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/wx/download/",contentType:"application/x-www-form-urlencoded",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"POST"});return promise}
//支持的银行F1211
function standByBank(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/banks/support/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"POST"});return promise}
//完成上传照片F3012
function finishUpload(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/finish/",data:data,beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"POST"});return promise}
//验证是否需要身份证F1100
function getValidate(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/user/valid/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},type:"GET"});return promise}
//确认签约F3010
function confirmSign(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/agree/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//获取订单申请编码 F3109
function getAppOrderSerial(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/record/detail/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,type:"GET"});return promise}
//获取合同号F3111
function getObligation(){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/obligation/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},dataType:"json",type:"GET"});return promise}
//撤销申请F3013
function applyRepeal(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/repeal/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//撤销申请F3006
function savePatch(data){var myfToken=public.getLocalStorage("myfToken"),promise=$.ajax({url:baseUrl+"/rest/apply/save/patch/",beforeSend:function(request){request.setRequestHeader("Authorization",myfToken)},data:data,dataType:"json",type:"POST"});return promise}
//销管分期试算页面获取产品列表
function getProductSale(){var promise=$.ajax({url:baseUrl+"/finance/product/list/salesmanview/",dataType:"json",type:"GET"});return promise}
//销管分期试算页面的分期试算接口
function getResultSale(data){var promise=$.ajax({url:baseUrl+"/instalment/trial/product/",data:data,dataType:"json",type:"POST"});return promise}
//微信登录
function getWxOpenid(){
// 生成环境
//var url = 'http://fen.gomemyf.com/fen-api/wx-bind/?flag=1';
//testin
var reg=/[^\\\/]*[\\\/]+/gi,str=window.location.pathname.replace(reg,""),nowHref=str.split(".")[0];window.localStorage.setItem("nowHref",nowHref);var url=baseUrl+"/wx-bind/?flag=2";return url}
//验证登录
function vilidataLogin(){var myToken=public.getLocalStorage("myfToken");/*var reg = /[^\\\/]*[\\\/]+/gi;
        var str = window.location.pathname.replace(reg, '');
        var nowHref = str.split('.')[0];
        window.localStorage.setItem('nowHref', nowHref);*/
//维护一个token失效的跳转路径===张舰
/*var reg = /[^\\\/]*[\\\/]+/gi;
        var str = window.location.pathname.replace(reg, '');
        var nowHref = str.split('.')[0];
        window.localStorage.setItem('nowHref', nowHref);*/
//维护一个token失效的跳转路径===张舰
return!!myToken||(window.location.href=getWxOpenid(),!1)}
//判断身份是否认证  =====张舰
function judgeIdentity(fn){var self=this;self.vilidataLogin()&&self.getValidate().done(function(data){"0"==data.state?"1"==data.data.identityValidation?(window.localStorage.getItem("nowHref")&&window.localStorage.removeItem("nowHref"),fn&&fn()):location.href="identity-page.html":"10024"==data.state||"-1"==data.state?location.href=self.getWxOpenid():public.showToast(data.showMessage)}).fail(function(){public.showToast("网络错误")})}var baseUrl="http://localhost/myfen",getVerifyImgCode=baseUrl+"/vcode/image/?";return{isRegistered:isRegistered,loginApi:loginApi,verificationCode:verificationCode,loanCalculator:loanCalculator,getCity:getCity,getVersion:getVersion,repayStage:repayStage,addSku:addSku,addBankCard:addBankCard,getIdenCode:getIdenCode,idenClickNext:idenClickNext,applyRecords:applyRecords,applyDetailes:applyDetailes,payDetail:payDetail,contractDetail:contractDetail,inboxMsg:inboxMsg,inboxActive:inboxActive,inboxInform:inboxInform,adjustPassword:adjustPassword,feedback:feedback,getRepayAmount:getRepayAmount,getPayCode:getPayCode,addMaterial:addMaterial,contractsList:contractsList,getRequestList:getRequestList,applicationQualify:applicationQualify,repay:repay,repayTelCode:repayTelCode,getCardList:getCardList,changeCard:changeCard,getRepayInfo:getRepayInfo,saveUserInfo:saveUserInfo,saveContactInfo:saveContactInfo,getLoanApplySerialNo:getLoanApplySerialNo,getLoanApplyReview:getLoanApplyReview,uploadPicture:uploadPicture,getWxData:getWxData,additionalDataGetMsg:additionalDataGetMsg,additionalDatasubMit:additionalDatasubMit,additionalDataResetPwd:additionalDataResetPwd,additionalDataGetCode:additionalDataGetCode,imgUpUrl:imgUpUrl,modifyPwd:modifyPwd,allCity:allCity,getUserInfo:getUserInfo,addCarGetReg:addCarGetReg,loanCalculate:loanCalculate,getFlexible:getFlexible,confirmLoan:confirmLoan,getGoodsInfo:getGoodsInfo,getloanPlan:getloanPlan,getBaseInfo:getBaseInfo,getconcatInfo:getconcatInfo,finishUpload:finishUpload,register:register,wxUploadImg:wxUploadImg,getValidate:getValidate,standByBank:standByBank,resetVerificationCode:resetVerificationCode,getDefaultCard:getDefaultCard,confirmSign:confirmSign,getObligation:getObligation,getAppOrderSerial:getAppOrderSerial,applyRepeal:applyRepeal,getVerifyImgCode:getVerifyImgCode,userLogOut:userLogOut,adjustResult:adjustResult,savePatch:savePatch,protocolQuickPay:protocolQuickPay,protocolLogin:protocolLogin,protocolConsume:protocolConsume,protocolAutoDebit:protocolAutoDebit,protocolAuthorized:protocolAuthorized,payActiveCode:payActiveCode,getWxOpenid:getWxOpenid,countPayAmount:countPayAmount,vilidataLogin:vilidataLogin,getProtocolAuthorized:getProtocolAuthorized,protocolAuthorizedNo:protocolAuthorizedNo,judgeIdentity:judgeIdentity,getValidList:getValidList,getProductSale:getProductSale,getResultSale:getResultSale}});