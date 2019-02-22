/**
 * @desc   ajax函数
 * @param  {String} type
 * @param  {String} url
 * @param  {Object} data
 * @param  {Function} callback
 */

function Ajax(options) {
	let opt = options || {};
	console.log('333',opt)
	// type, url, data, callback
	// let ajaxParams1 = {
	// 	method: 'post',
	// 	url: url.dtlogUrl,
	// 	data:opts.data,
	// 	'success':(res) => {
	// 		resolve(res)
	// 	},
	// 	'error': (res) => {
	// 		reject(res)
	// 	}
	// }
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
