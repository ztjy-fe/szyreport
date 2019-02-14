/**
 * @desc   判断浏览器所在机器操作系统版本
 * @param
 * @return {string} version
 */

var getOsVersion = function() {
	let ua = navigator.userAgent;
	let version = '';
	if (ua.match(/iPhone/i) || ua.match(/iPod/i)) {
		var regStr_saf = /OS [\d._]*/gi
		var verinfo = ua.match(regStr_saf)
		version = (verinfo + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
	} else if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
		version = ua.slice(ua.indexOf('Android') + 8, ua.indexOf('Android')+13);
	} else if (ua.indexOf('BB10') > -1) {
		version = ua.substr(ua.indexOf('BB10') + 5, ua.indexOf(";", ua.indexOf("BB10")) - ua.indexOf('BB10') - 5);
	} else if (ua.indexOf('IEMobile')) {
		version = ua.substr(ua.indexOf('IEMobile') + 9, ua.indexOf(";", ua.indexOf("IEMobile")) - ua.indexOf('IEMobile') - 9);
	}
	return version;
}
