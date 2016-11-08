define(["jquery","mustache"],function($,mustache){
    var _html = {
        //企业账户
        entAccount:{
            html:null,
            src: "./tpl/entAccount.html"
        },
        //授信处理
        creditManage:{
            html:null,
            src: "./tpl/creditManage.html"
        },
        //授信审核
        creditApproval:{
            html:null,
            src: "./tpl/creditApproval.html"
        },
        //授信记录
        creditRecord:{
            html:null,
            src: "./tpl/creditRecord.html"
        },
        //申请处理
        financeManage:{
            html:null,
            src: "./tpl/financeManage.html"
        },
        //协议审核
        financeApproval:{
            html:null,
            src: "./tpl/financeApproval.html"
        },
        //融资记录
        financeRecord:{
            html:null,
            src: "./tpl/financeRecord.html"
        },
        //放款处理
        loanManage:{
            html:null,
            src: "./tpl/loanManage.html"
        },
        //回款处理
        receiveManage:{
            html:null,
            src: "./tpl/receiveManage.html"
        },
        //资金流水
        capitalFlow:{
            html:null,
            src: "./tpl/capitalFlow.html"
        },
        //银行流水查询
        bankFlow:{
            html:null,
            src: "./tpl/bankFlow.html"
        },
        //业务合同
        businessContract:{
            html:null,
            src: "./tpl/businessContract.html"
        },
        //融资合同
        financeContract:{
            html:null,
            src: "./tpl/financeContract.html"
        },
        //企业审核
        entApproval:{
            html:null,
            src: "./tpl/entApproval.html"
        },
        //基本信息
        basicInfo:{
            html:null,
            src: "./tpl/basicInfo.html"
        },
        //安全中心
        securityCenter:{
            html:null,
            src: "./tpl/securityCenter.html"
        },
        //用户管理
        userManage:{
            html:null,
            src: "./tpl/userManage.html"
        },
        //费用管理
        costManage:{
            html:null,
            src: "./tpl/costManage.html"
        },
        //产品开通
        productAdd:{
            html:null,
            src: "./tpl/productAdd.html"
        }
    };
    function getHtml(name, callback) {
        if (!_html[name]) {
            callback(null);
            return;
        }
        if (_html[name].html) {
            callback(_html[name].html);
        } else {
            $.get(_html[name].src, function (data) {
                _html[name].html = data;
                callback(data);
            });
        }
    }
    //获取localstorage信息
    function getLocalStorage(key){
       return window.localStorage.getItem(key);
    }
    //设置localstorage信息
    function setLocalStorage(key,val){
        window.localStorage.setItem(key,val);
    }
    //删除localstorage信息
    function removeLocalStorage(key){
        window.localStorage.removeItem(key);
    }
    //获取sessionStorage信息
    function getSessionStorage(key){
        return window.sessionStorage.getItem(key);
    }
    //设置sessionStorage信息
    function setSessionStorage(key,val){
        window.sessionStorage.setItem(key,val);
    }
    //删除sessionStorage信息
    function removeSessionStorage(key){
        window.sessionStorage.removeItem(key);
    }
    //设置hash
    function setHash(key,val){
        $.hash(key,val);
    }
    //获取hash
    function getHash(key){
        var hashStr=$.hash(key);
        return hashStr;
    }
    //清除hash
    function removeHash(){
        window.location.hash='';
    }
    //返回
    function goBack(){
        // location.replace(document.referrer);
        history.back();
    }
    //toast提示  content:toast显示内容 duration：显示时间
    function showToast(content,duration,callback){
        $(".pub-toast").show();
        duration = duration || 3000;
        document.getElementById("toast_content").innerHTML = content;
        setTimeout(function () {
            $(".pub-toast").hide();
            callback?callback():"";
        }, duration);
    }
    //删除数组某一项
    function arrDel(arr,str){
        var indexNum;
        $.each(arr,function(key,val){
            if(val==str){
                indexNum=key;
                arr.splice(indexNum,1);
                return false;
            }
        });
    }
    //刷新
    function refresh(callback){
        $("#networkBtn").on("click",function(){
            callback?callback():"";
        })
    }

    //获取地址中的信息
    function GetQueryString(name) {
        /*定义正则，用于获取相应参数*/
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        /*字符串截取，获取匹配参数值*/
        var r = window.location.search.substr(1).match(reg);
        /*返回参数值*/
        if (r != null) {
            return decodeURI(r[2]);
        } else {
            return null;
        }
    }
    //订阅发布
    function subPub(){
        var o = $({});
        $.subscribe = function () {
            o.bind.apply(o, arguments);
        };
        $.unsubscribe = function () {
            o.unbind.apply(o, arguments);
        };
        $.publish = function () {
            o.trigger.apply(o, $.makeArray(arguments));
        };
    }
    //获取数据失败 7/21---王雅轩
    function networkError(container){
        getHtml("networkError",function(html){
            var outPut=mustache.render(html);
            container.html(outPut);
            refresh(function(){
                location.reload()
            });
        })
    }
    //获取cookie  7/19-----王雅轩
    function getCookie(name){
        var reg=new RegExp(name+'=([^;]*)'),
            value=reg.exec(document.cookie)[1];
        return value;
    }
    //埋点函数  ===张舰
    function talkingData(){
            var hm = document.createElement("script");
            var appKey = "8E36C2BB5A6C18402000152A3006058A";
            hm.src = "js/vendor/td-h5-website-sdk.js";
            hm.setAttribute('td-appid',appKey);
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
    }
    //埋点-主动发送策略 ===张舰
    function manualSubmit(){
        TDAPP.send();
    }
    //埋点--自定义事件
    function diyEvent(){
        window.eventTracking = (function() {
            var eventTracking = function(data) {
                if (data === undefined)
                    data = {};
                if (!Array.isArray(data))
                    data = [data];
                for (var i = 0, length = data.length; i < length; i++) {
                    if (data[i].EventId === undefined) {
                        console.log("can't capture EventId of " + i);
                        return;
                    }
                    if (data[i].Label === undefined)
                        data[i].Label = ""
                    if (data[i].MapKv === undefined)
                        data[i].MapKv = {}
                    console.log('EventId', data[i].EventId, 'Label', data[i].Label, 'MapKv', data[i].MapKv);

                    TDAPP.onEvent(data[i].EventId, data[i].Label, data[i].MapKv);
                }
            }


            $('body').on('touchstart', '[should-captured]', function(e) {
                var data = $(this).data('eventJson');
                eventTracking(data);
            });

            return eventTracking;
        })();
    }
    return {
        getHtml:getHtml,
        getLocalStorage:getLocalStorage,
        setLocalStorage:setLocalStorage,
        removeLocalStorage:removeLocalStorage,
        setHash:setHash,
        getHash:getHash,
        removeHash:removeHash,
        goBack:goBack,
        showToast:showToast,
        arrDel:arrDel,
        refresh:refresh,
        GetQueryString:GetQueryString,
        subPub:subPub,
        getCookie:getCookie,
        networkError:networkError,
        getSessionStorage:getSessionStorage,
        setSessionStorage:setSessionStorage,
        removeSessionStorage:removeSessionStorage,
        talkingData:talkingData,
        manualSubmit:manualSubmit
    };
});
