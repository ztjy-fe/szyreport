/**
 * @desc   ajax函数
 * @param  {String} option.type 请求参数
 * @param  {String} option.url 请求url
 * @param  {Object} option.data  请求数据
 * @param  {Function} callback 回调函数
 */

function Ajax(options) {
	let opt = options || {};
	// 创建ajax对象
	var xhr = new XMLHttpRequest();

	var type = opt.type.toUpperCase();
	var url = opt.url;
	var data = opt.data;
	// 用于清除缓存
	var random = Math.random();
	if(type === 'GET'){
		if(data){
			var str = '';
			for(var key in data){
				str += key+'='+data[key]+'&';
			}
			data = str.replace(/&$/, '');
			xhr.open('GET', url + '&' + data, true);
		} else {
			xhr.open('GET', url + '&t=' + random, true);
		}
		xhr.send();

	} else if(type === 'POST'){
		data = JSON.stringify(data)
		xhr.open('POST', url, true);
		xhr.send(data);
	}

	// 处理返回数据
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				opt.success(xhr.responseText);
			}
		}
	}
}

module.exports = Ajax;
