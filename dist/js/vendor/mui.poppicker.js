/**
 * 弹出选择列表插件
 * 此组件依赖 listpcker ，请在页面中先引入 mui.picker.css + mui.picker.js
 * varstion 1.0.1
 * by Houfeng
 * Houfeng@DCloud.io
 */
!function($,document){
//创建 DOM
$.dom=function(str){return"string"!=typeof str?str instanceof Array||str[0]&&str.length?[].slice.call(str):[str]:($.__create_dom_div__||($.__create_dom_div__=document.createElement("div")),$.__create_dom_div__.innerHTML=str,[].slice.call($.__create_dom_div__.childNodes))};var panelBuffer='<div class="mui-poppicker">\t\t<div class="mui-poppicker-header">\t\t\t<span class="mui-btn mui-poppicker-btn-cancel" id="testCancel">取消</span>\t\t\t<span class="mui-btn mui-btn-blue mui-poppicker-btn-ok" id="testOk">确定</span>\t\t\t<div class="mui-poppicker-clear"></div>\t\t</div>\t\t<div class="mui-poppicker-body">\t\t</div>\t</div>',pickerBuffer='<div class="mui-picker">\t\t<div class="mui-picker-inner">\t\t\t<div class="mui-pciker-rule mui-pciker-rule-ft"></div>\t\t\t<ul class="mui-pciker-list">\t\t\t</ul>\t\t\t<div class="mui-pciker-rule mui-pciker-rule-bg"></div>\t\t</div>\t</div>';$.PopPicker=$.Class.extend({
//构造函数
init:function(options){var self=this;self.options=options||{},self.options.buttons=self.options.buttons||["取消","确定"],self.panel=$.dom(panelBuffer)[0],document.body.appendChild(self.panel),self.ok=self.panel.querySelector(".mui-poppicker-btn-ok"),self.cancel=self.panel.querySelector(".mui-poppicker-btn-cancel"),self.body=self.panel.querySelector(".mui-poppicker-body"),self.mask=$.createMask(),self.cancel.innerText=self.options.buttons[0],self.ok.innerText=self.options.buttons[1],self.cancel.addEventListener("tap",function(event){self.hide()},!1),self.ok.addEventListener("tap",function(event){if(self.callback){var rs=self.callback(self.getSelectedItems());rs!==!1&&self.hide()}},!1),self.mask[0].addEventListener("tap",function(){self.hide()},!1),self._createPicker(),
//防止滚动穿透
self.panel.addEventListener($.EVENT_START,function(event){event.preventDefault()},!1),self.panel.addEventListener($.EVENT_MOVE,function(event){event.preventDefault()},!1)},_createPicker:function(){var self=this,layer=self.options.layer||1,width=100/layer+"%";self.pickers=[];for(var i=1;i<=layer;i++){var pickerElement=$.dom(pickerBuffer)[0];pickerElement.style.width=width,self.body.appendChild(pickerElement);var picker=$(pickerElement).picker();self.pickers.push(picker),pickerElement.addEventListener("change",function(event){var nextPickerElement=this.nextSibling;if(nextPickerElement&&nextPickerElement.picker){var eventData=event.detail||{},preItem=eventData.item||{};nextPickerElement.picker.setItems(preItem.children)}},!1)}},
//填充数据
setData:function(data){var self=this;data=data||[],
// console.log(self.pickers);
self.pickers[0].setItems(data)},
//获取选中的项（数组）
getSelectedItems:function(){var self=this,items=[];for(var i in self.pickers){var picker=self.pickers[i];items.push(picker.getSelectedItem()||{})}return items},
//显示
show:function(callback){var self=this;self.callback=callback,self.mask.show(),document.body.classList.add($.className("poppicker-active-for-page")),self.panel.classList.add($.className("active")),
//处理物理返回键
self.__back=$.back,$.back=function(){self.hide()}},
//隐藏
hide:function(){var self=this;self.disposed||(self.panel.classList.remove($.className("active")),self.mask.close(),document.body.classList.remove($.className("poppicker-active-for-page")),
//处理物理返回键
$.back=self.__back)},dispose:function(){var self=this;self.hide(),setTimeout(function(){self.panel.parentNode.removeChild(self.panel);for(var name in self)self[name]=null,delete self[name];self.disposed=!0},300)}})}(mui,document);