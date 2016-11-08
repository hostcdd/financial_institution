define(function(){
    function isNull(str){
        if ( str === "" ) return true;
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }
    function isName(str,callback){
        var boolStr;
        var reg = /^[\u4E00-\u9FA5]{2,20}$/;
        boolStr=reg.test(str);
        callback?callback(boolStr):"";
        return boolStr;
    }
    function checkIdCardNo(idCardNo,callback){
        var boolStr;
        //15位和18位身份证号码的基本校验
        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
        if(!check) return false;
        //判断长度为15位或18位
        if(idCardNo.length==15){
            boolStr=check15IdCardNo(idCardNo);
        }else if(idCardNo.length==18){
            boolStr=check18IdCardNo(idCardNo);
        }else{
            boolStr=false;
        }
        callback?callback(boolStr):"";
        return boolStr;
    }
    //校验15位的身份证号码
    function check15IdCardNo(idCardNo){
        //15位身份证号码的基本校验
        var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
        if(!check) return false;
        //校验地址码
        var addressCode = idCardNo.substring(0,6);
        check = idCardNoUtil.checkAddressCode(addressCode);
        if(!check) return false;
        var birDayCode = '19' + idCardNo.substring(6,12);
        //校验日期码
        return idCardNoUtil.checkBirthDayCode(birDayCode);
    }
    //校验18位的身份证号码
    function check18IdCardNo(idCardNo){
        //18位身份证号码的基本格式校验
        var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
        if(!check) return false;
        //校验地址码
        var addressCode = idCardNo.substring(0,6);
        check = checkAddressCode(addressCode);
        if(!check) return false;
        //校验日期码
        var birDayCode = idCardNo.substring(6,14);
        check = checkBirthDayCode(birDayCode);
        if(!check) return false;
        //验证校检码
        return checkParityBit(idCardNo);
    }
    function checkParityBit(idCardNo){
        var parityBit = idCardNo.charAt(17).toUpperCase();
        if(getParityBit(idCardNo) == parityBit){
            return true;
        }else{
            return false;
        }
    }
    function getParityBit(idCardNo){
        var parityBit=["1","0","X","9","8","7","6","5","4","3","2"];
        var powers=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];
        var id17 = idCardNo.substring(0,17);
        var power = 0;
        for(var i=0;i<17;i++){
            power += parseInt(id17.charAt(i),10) * parseInt(powers[i]);
        }
        var mod = power % 11;
        return parityBit[mod];
    }
    function checkAddressCode(addressCode){
        var provinceAndCitys={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",
            31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",
            45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",
            65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
        var check = /^[1-9]\d{5}$/.test(addressCode);
        if(!check) return false;
        if(provinceAndCitys[parseInt(addressCode.substring(0,2))]){
            return true;
        }else{
            return false;
        }
    }
    function checkBirthDayCode(birDayCode){
        var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode);
        if(!check) return false;
        var yyyy = parseInt(birDayCode.substring(0,4),10);
        var mm = parseInt(birDayCode.substring(4,6),10);
        var dd = parseInt(birDayCode.substring(6),10);
        var xdata = new Date(yyyy,mm-1,dd);
        if(xdata > new Date()){
            return false;//生日不能大于当前日期
        }else if ( ( xdata.getFullYear() == yyyy ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == dd ) ){
            return true;
        }else{
            return false;
        }
    }
    //校验手机号
    function isPhoneNum(tel,callback){
        var boolStr;
        var reg = /^0?1[3|4|5|7|8|9][0-9]\d{8}$/;
        reg.test(tel)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr;
    }
    //检验密码6-12位
    function isPwd(pwd,callback){
        var boolStr;
        var reg=/^\da-zA-Z{8,20}$/;
        reg.test(pwd)?boolStr=1:boolStr=0;
        return boolStr;
    }
    //验证数字
    function isNum(num,callback){
        var boolStr;
        var reg=/^\+?[1-9][0-9]*$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //验证日期 格式为
    function isDate(str,callback){
        var boolStr;
        var reg=/^(\d{4})-(\d{2})-(\d{2})$/;
        reg.test(str)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr;
    }
    //验证银行卡号
    function isCardNum(num,callback){
        var boolStr;
        var reg=/^(\d{16}|\d{18}|\d{19})$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //验证4位数验证码
    function isRegNum(num,callback){
        var boolStr;
        var reg=/^(\d{4})$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //验证邮箱
    function isRegEmail(num,callback){
        var boolStr;
        var reg= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //bug==115===修改正则，可输入数字===张晓花===0719
    //验证公司电话
    function isComTel(num,callback){
        var boolStr;
        var reg=/^\d{3}-\d{8}|\d{4}-\d{7}|\d{11}$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //消费金融_美易分_功能测试MYFGNCS-1500
    //H5：【SIT--联系人信息】联系人姓名输入英文和空格，页面提示：联系人姓名格式错误
    //张晓花==0818==加入空格
    //验证单位名称
    function isComName(num,callback){
        var boolStr;
        var reg=/^[\u4e00-\u9fa50-9a-zA-Z\s]{1,40}$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    //验证详细地址
    function isDetailAddress(num,callback){
        var boolStr;
        var reg=/^[\u4e00-\u9fa50-9a-zA-Z\s]{1,40}$/;
        reg.test(num)?boolStr=1:boolStr=0;
        callback?callback(boolStr):"";
        return boolStr
    }
    return{
        "isNull":isNull,
        "isName":isName,
        "isPhoneNum":isPhoneNum,
        "isNum":isNum,
        "isDate":isDate,
        "checkIdCardNo":checkIdCardNo,
        'isPwd':isPwd,
        "isCardNum":isCardNum,
        "isRegNum":isRegNum,
        "isRegEmail":isRegEmail,
        "isComTel":isComTel,
        "isComName":isComName,
        "isDetailAddress":isDetailAddress
    }
});