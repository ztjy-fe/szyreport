const getCookie = require('./getCookie.js')
const setCookie = require('./setCookie.js')
/**
 * @desc   获取设备的id
 * @return {String} deviceId
 */

function getDeviceId() {
	let deviceId = getCookie('dev_id');
	if(deviceId) {
		return deviceId;
	} else {
		setCookie('dev_id', generateUUID(), 30)
		return getCookie('dev_id');
	}
}

/**
 * @desc   生成uuid
 * @return {String} uuid
 */
function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
	});
	return uuid;
}





module.exports = getDeviceId;
