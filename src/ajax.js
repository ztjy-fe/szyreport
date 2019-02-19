/**
 * @desc   ajax函数
 * @param  {String} type
 * @param  {String} url
 * @param  {Object} data
 * @param  {Function} callback
 */

function Ajax(type, url, data, callback) {
	// 创建ajax对象
	var xhr = new XMLHttpRequest();

	var type = type.toUpperCase();
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
				callback(xhr.responseText);
			}
		}
	}
}

module.exports = Ajax;
