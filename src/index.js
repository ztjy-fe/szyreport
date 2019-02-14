/**
 * @desc   pv 埋点报数
 * @param  {String} type
 * @param  {String} params
 * @return {Object}
 */
const assign = require('./assign')
const getPlatform = require('./getPlatform')
const getOsVersion = require('./getOsVersion')
const Ajax = require('./ajax')
// 公共参数部分
function defaultParams() {
	let os = getPlatform(); // 操作系统
	let	os_ver = getOsVersion(); // 系统版本
	let params =  {
		'os': os,
		'os_ver': os_ver
	}
	let defaultParams = {
		'platf': 3, //平台
		'dev_id': '',//设备ID
		'imei': '',//手机串号
		'mac': '',//硬件编号
		'adid': '',//AndroidID
		'mtype': '',// 设备型号
		'app_ver': '',//App版本
		'app_gid': '',//App渠道
		'login_status': '',//登录状态
		'role': '',//账号角色
		'user_id': '',//账号ID
		'baby_id': '',//宝宝ID
		'student_id': '',//学生ID
		'school_id': '',//学校ID
		'adcode': '',//地区编码
		'pay_state': '',//付费状态
		'logtime': '',//日志时间
		'net': '',//网络状态
		'coordinate': '',//经纬度坐标
		'ip': '',//IP地址
		'country': '',//国家
		'province': '',//省份
		'city': '',//城市
		'county': ''//区县
	};
	return assign(params, defaultParams);
}

//PV 报数
function reportPV(options) {
	const opts = options || {};
	let defaultaliyunUrl = '.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_pv/track?APIVersion=0.6.0'
	let defaultdtlogUrl = '.szy.cn/sdo_bfn_pv'
	this.url =  {
		// aliyunUrl: 'https://ztjy' + defaultURL,//线上
		aliyunUrl: 'https://ztjy-test' + defaultURL,//测试环境
		dtlogUrl: 'https://alpha-dtlog' + defaultdtlogUrl, //测试环境
		//dtlogUrl:'https://dtlog' + defaultdtlogUrl //线上环境
	};
	this.params = assign(opts, defaultParams());
	sendEvent(this.url, this.params)
}

//埋点报数
function reportEvent(options) {
	const opts = options || {};
	let defaultaliyunUrl = '.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_event/track?APIVersion=0.6.0'
	let defaultdtlogUrl = '.szy.cn/sdo_bfn_event'
	this.url =  {
		// aliyunUrl: 'https://ztjy' + defaultURL,//线上
		aliyunUrl: 'https://ztjy-test' + defaultURL,//测试环境
		dtlogUrl: 'https://alpha-dtlog' + defaultdtlogUrl, //测试环境
		//dtlogUrl:'https://dtlog' + defaultdtlogUrl //线上环境
	};
	this.params = assign(opts, defaultParams());
	sendEvent(this.url, this.params)
}

// 发送ajax请求
function sendEvent(url,params) {
	//  发送阿里云服务器
	Ajax('get', url.aliyunUrl, params, function(data){
		console.log(data);
	}, function(error){
		console.log(error);
	});

	//  发送大数据服务器
	Ajax('post', url.dtlogUrl, params, function(data){
		console.log(data);
	}, function(error){
		console.log(error);
	});
}



module.exports = {
	reportPV,
	reportEvent
}
