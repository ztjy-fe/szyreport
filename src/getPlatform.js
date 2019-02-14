/**
 * @desc   判断平台类型 1是安卓2 是ios
 * @param
 * @return {Number} platform
 */
var getPlatform = function () {
	var ua = window.navigator.userAgent;
	let platform = 0;
	if(ua.indexOf('Android') > -1){
		//android
		platform = 1;
	} else if(ua.indexOf('iPhone') > -1){
		// "iPhone";
		platform = 2
	}
	return platform;
}
