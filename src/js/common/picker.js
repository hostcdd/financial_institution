
//data:数据   eleId:点击的元素Id  n是几列  callback是回掉函数
define(function(){
	var slidePicker=function(data,n,callback){
		//mui.init();
		mui.ready(function() {
			var cityPicker = new mui.PopPicker({
				layer: n
			});
			cityPicker.setData(data);
			//var showCityPickerButton = document.getElementById(eleId);
			//华为手机不支持tap事件，换为click事件--刘凯
			//showCityPickerButton.addEventListener('click', function(event) {
				cityPicker.show(function(items) {
					callback && callback(items);
					cityPicker.dispose();
				});
			//}, false);
		});
	};

	return {
		slidePicker:slidePicker
	}
});

