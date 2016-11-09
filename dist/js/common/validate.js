define(function(){function isNull(str){if(""===str)return!0;var regu="^[ ]+$",re=new RegExp(regu);return re.test(str)}function isName(str,callback){var boolStr,reg=/^[\u4E00-\u9FA5]{2,20}$/;return boolStr=reg.test(str),callback?callback(boolStr):"",boolStr}function checkIdCardNo(idCardNo,callback){var boolStr,check=/^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
//判断长度为15位或18位
return!!check&&(boolStr=15==idCardNo.length?check15IdCardNo(idCardNo):18==idCardNo.length&&check18IdCardNo(idCardNo),callback?callback(boolStr):"",boolStr)}
//校验15位的身份证号码
function check15IdCardNo(idCardNo){
//15位身份证号码的基本校验
var check=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);if(!check)return!1;
//校验地址码
var addressCode=idCardNo.substring(0,6);if(check=idCardNoUtil.checkAddressCode(addressCode),!check)return!1;var birDayCode="19"+idCardNo.substring(6,12);
//校验日期码
return idCardNoUtil.checkBirthDayCode(birDayCode)}
//校验18位的身份证号码
function check18IdCardNo(idCardNo){
//18位身份证号码的基本格式校验
var check=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);if(!check)return!1;
//校验地址码
var addressCode=idCardNo.substring(0,6);if(check=checkAddressCode(addressCode),!check)return!1;
//校验日期码
var birDayCode=idCardNo.substring(6,14);return check=checkBirthDayCode(birDayCode),!!check&&checkParityBit(idCardNo)}function checkParityBit(idCardNo){var parityBit=idCardNo.charAt(17).toUpperCase();return getParityBit(idCardNo)==parityBit}function getParityBit(idCardNo){for(var parityBit=["1","0","X","9","8","7","6","5","4","3","2"],powers=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],id17=idCardNo.substring(0,17),power=0,i=0;i<17;i++)power+=parseInt(id17.charAt(i),10)*parseInt(powers[i]);var mod=power%11;return parityBit[mod]}function checkAddressCode(addressCode){var provinceAndCitys={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},check=/^[1-9]\d{5}$/.test(addressCode);return!!check&&!!provinceAndCitys[parseInt(addressCode.substring(0,2))]}function checkBirthDayCode(birDayCode){var check=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode);if(!check)return!1;var yyyy=parseInt(birDayCode.substring(0,4),10),mm=parseInt(birDayCode.substring(4,6),10),dd=parseInt(birDayCode.substring(6),10),xdata=new Date(yyyy,mm-1,dd);return!(xdata>new Date)&&(xdata.getFullYear()==yyyy&&xdata.getMonth()==mm-1&&xdata.getDate()==dd)}
//校验手机号
function isPhoneNum(tel,callback){var boolStr,reg=/^0?1[3|4|5|7|8|9][0-9]\d{8}$/;return boolStr=reg.test(tel)?1:0,callback?callback(boolStr):"",boolStr}
//检验密码6-12位
function isPwd(pwd,callback){var boolStr,reg=/^\da-zA-Z{8,20}$/;return boolStr=reg.test(pwd)?1:0}
//验证数字
function isNum(num,callback){var boolStr,reg=/^\+?[1-9][0-9]*$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//验证日期 格式为
function isDate(str,callback){var boolStr,reg=/^(\d{4})-(\d{2})-(\d{2})$/;return boolStr=reg.test(str)?1:0,callback?callback(boolStr):"",boolStr}
//验证银行卡号
function isCardNum(num,callback){var boolStr,reg=/^(\d{16}|\d{18}|\d{19})$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//验证4位数验证码
function isRegNum(num,callback){var boolStr,reg=/^(\d{4})$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//验证邮箱
function isRegEmail(num,callback){var boolStr,reg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//bug==115===修改正则，可输入数字===张晓花===0719
//验证公司电话
function isComTel(num,callback){var boolStr,reg=/^\d{3}-\d{8}|\d{4}-\d{7}|\d{11}$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//消费金融_美易分_功能测试MYFGNCS-1500
//H5：【SIT--联系人信息】联系人姓名输入英文和空格，页面提示：联系人姓名格式错误
//张晓花==0818==加入空格
//验证单位名称
function isComName(num,callback){var boolStr,reg=/^[\u4e00-\u9fa50-9a-zA-Z\s]{1,40}$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}
//验证详细地址
function isDetailAddress(num,callback){var boolStr,reg=/^[\u4e00-\u9fa50-9a-zA-Z\s]{1,40}$/;return boolStr=reg.test(num)?1:0,callback?callback(boolStr):"",boolStr}return{isNull:isNull,isName:isName,isPhoneNum:isPhoneNum,isNum:isNum,isDate:isDate,checkIdCardNo:checkIdCardNo,isPwd:isPwd,isCardNum:isCardNum,isRegNum:isRegNum,isRegEmail:isRegEmail,isComTel:isComTel,isComName:isComName,isDetailAddress:isDetailAddress}});