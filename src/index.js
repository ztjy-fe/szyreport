/**
 * @desc   pv 埋点报数
 * @param  {String} type
 * @param  {String} params
 * @return {Object}
 */
const getPlatform = require('./getPlatform.js')
const getOsVersion = require('./getOsVersion.js')
const Ajax = require('./ajax.js')
const getDeviceId = require('./getDeviceId.js')
/**
 * @desc   公共参数部分
 * @return {Object}
 */
function defaultParams() {
	let os = getPlatform(); // 操作系统
	let	os_ver = getOsVersion(); // 系统版本
	let dev_id = getDeviceId();// 设备ID
	return {
		'platf': 3, //平台
		'dev_id': dev_id,// 设备ID
		'imei': '',// 手机串号
		'mac': '',//硬件编号
		'adid': '',//AndroidID
		'mtype': '',// 设备型号
		'app_ver': '',//App版本
		'app_gid': '',//App渠道
		'login_status': '1',//登录状态
		'role': '',//账号角色
		'user_id': '80b480aa8bf764302670', //账号ID
		'baby_id': 'd4518e7e71f44cb39768', //宝宝ID
		'student_id': 'f6adc4da59cdea10ec2b', //学生ID
		'school_id': '9e663d14e91a07ce9114', //学校ID
		'adcode': '',//地区编码
		'pay_state': '',//付费状态
		'logtime': '',//日志时间
		'net': '',//网络状态
		'coordinate': '',//经纬度坐标
		'ip': '',//IP地址
		'country': '',//国家
		'province': '',//省份
		'city': '',//城市
		'county': '',//区县
		'os': os,// 操作系统
		'os_ver': os_ver // 系统版本
	};

}


/**
 * @desc   getUrl函数 获取当前的url
 * @param  {String} prefix
 * @return {Object}
 */
function getUrl(prefix, prams) {
	let aliyunUrl = ''
	let dtlogUrl = ''
	switch (prefix) {
		case 'alpha':
			aliyunUrl = 'https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/' + prams + '/track?APIVersion=0.6.0'
			dtlogUrl = 'http://alpha-dtlog.szy.com/' + prams
			break
		default:
			aliyunUrl = 'https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/'+ prams + '/track?APIVersion=0.6.0'
			dtlogUrl = 'https://dtlog.szy.cn/' + prams
			break
	}
	return  {
		aliyunUrl: aliyunUrl, // 阿里云url
		dtlogUrl: dtlogUrl // 大数据url
	};
}
//PV 报数
function reportPV(options) {
	const opts = options || {};
	let params = Object.assign(defaultParams(), opts.data);
	let data = {
		prefix: opts.prefix,
		data: params,
		sdo_bfn: 'sdo_bfn_pv',
	}
	sendEvent(data);
}

//埋点报数
function reportEvent(options) {
	const opts = options || {};
	let params = Object.assign(defaultParams(),opts.data);
	let data = {
		prefix: opts.prefix,
		data: {
			__logs__:[params],
			__source__: '',
			__topic__: ''
		},
		sdo_bfn: 'sdo_bfn_event',
	}
	if(opts.callback) {
		data.callback = opts.callback
	}
	sendEvent(data)
}

// 发送ajax请求
function sendEvent(options) {
	const opts = options || {};
	let url = getUrl(opts.prefix, opts.sdo_bfn);
	if(opts.sdo_bfn === 'sdo_bfn_event') {

		let p1 = new Promise((resolve, reject) => {
			//  发送阿里云服务器
			Ajax({
				type: 'get',
				url: url.aliyunUrl,
				data:opts.data,
				'success':(res) => {
					resolve(res)
				},
				'error': (res) => {
					reject(res)
				}
			});
		})


		let p2 = new Promise((resolve, reject) => {
			//  发送大数据服务器
			Ajax({
				type: 'post',
				url: url.dtlogUrl,
				data:opts.data,
				'success':(res) => {
					resolve(res)
				},
				'error': (res) => {
					reject(res)
				}
			});
		})
		Promise.all([p1, p2]).then((result) => {
			opts.callback && opts.callback();
		}).catch((error) => {
			opts.callback && opts.callback();
		})
	} else {
		//  发送阿里云服务器
		Ajax({
			type: 'get',
			url: url.aliyunUrl,
			data:opts.data,
			'success':(res) => {
				// console.log(res);
			},
			'error': (res) => {
				// console.log(res);
			}
		});
		//  发送大数据服务器

		Ajax({
			type: 'post',
			url: url.dtlogUrl,
			data:opts.data,
			'success':(res) => {
				// console.log(res)
			},
			'error': (res) => {
				// console.log(res)
			}
		});
	}
}

module.exports = {
	reportPV,
	reportEvent
}
