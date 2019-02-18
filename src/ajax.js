/**
 * @desc   ajax函数
 * @param  {String} type
 * @param  {String} url
 * @param  {Object} data
 * @param  {Function} success
 * @param  {Function} failed
 */

function Ajax(type, url, data, success, failed) {
	// 创建ajax对象
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP')
	}

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
		// 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}

	// 处理返回数据
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				success(xhr.responseText);
			} else {
				if(failed){
					failed(xhr.status);
				}
			}
		}
	}
}

module.exports = Ajax;
