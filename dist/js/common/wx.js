define(["api","public"],function(api,public){function wxInit(){var configData={noncestr:Math.random().toString(36).slice(2,16),timestamp:Math.floor(new Date/1e3),
//url:"https://fen.gomemyf.com/h5-sit/info-page.html"
url:window.location.href},dataPromise=api.getWxData(configData);dataPromise.done(function(obj){
//console.log(obj.data.timestamp);
0===obj.state?wx.config({debug:!1,jsApiList:["chooseImage","uploadImage","closeWindow","getLocation"],appId:obj.data.AppID,timestamp:obj.data.timestamp,nonceStr:obj.data.nonceStr,signature:obj.data.signature}):public.showToast(obj.showMessage)})}function wxPaiPhoto(callback,callback2){wx.ready(function(){wx.chooseImage({count:1,// 默认9
sizeType:["original","compressed"],// 可以指定是原图还是压缩图，默认二者都有
sourceType:["album","camera"],// 可以指定来源是相册还是相机，默认二者都有  ['album', 'camera']
success:function(res){callback&&callback(res.localIds[0])},fail:function(err){callback2&&callback2(err.errMsg),public.showToast(err.errMsg)},cancel:function(){public.showToast("您取消了本次拍照")}})}),wx.error(function(res){public.showToast(res)})}function wxUploadPhoto(imgId,callback){wx.ready(function(){wx.uploadImage({localId:imgId,// 需要上传的图片的本地ID，由chooseImage接口获得
isShowProgressTips:0,//不显示进度提示,
success:function(res){callback&&callback(res.serverId)},fail:function(err){public.showToast(err.errMsg)}})}),wx.error(function(res){public.showToast(res)})}function wxCloseWindow(){wx.ready(function(){wx.closeWindow()})}function wxGetLocation(){wx.ready(function(){wx.getLocation({type:"wgs84",// 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
success:function(res){var latitude=res.latitude,longitude=res.longitude;// 经度，浮点数，范围为180 ~ -180。
public.setLocalStorage("latitude",latitude),public.setLocalStorage("longitude",longitude)}})})}return{wxInit:wxInit,wxPaiPhoto:wxPaiPhoto,wxUploadPhoto:wxUploadPhoto,wxCloseWindow:wxCloseWindow,wxGetLocation:wxGetLocation}});