/**
 * @desc   生成uuid
 * @param  {String} name
 * @param  {String} value
 * @param  {Number} exdays
 */
function setCookie(name, value, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();
	document.cookie = name + '=' + value + '; ' + expires+'; path=/'
}
module.exports = setCookie;
