/**
 * @desc   api函数 获取当前的url
 * @return {Object}
 */
// 统一域名的接口地址
function api() {
	const currentHost = window.location.host
	let prefix = ''
	if (currentHost.indexOf('-') > -1) {
		prefix = currentHost.split('-')[0]
	}
	let sdo_bfn_pv = ''
	let sdo_bfn_event = ''
	let dtlogUrl = ''
	switch (prefix) {
		case 'dev':
			sdo_bfn_pv = 'https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_pv/track?APIVersion=0.6.0'
			sdo_bfn_event = 'https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_event/track?APIVersion=0.6.0'
			dtlogUrl = 'http://alpha-dtlog.szy.com'
			break
		case 'alpha':
			sdo_bfn_pv = 'https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_pv/track?APIVersion=0.6.0'
			sdo_bfn_event = 'https://ztjy-test.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_event/track?APIVersion=0.6.0'
			dtlogUrl = 'http://alpha-dtlog.szy.com'
			break
		case 'rc':
			sdo_bfn_pv = 'https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_pv/track?APIVersion=0.6.0'
			sdo_bfn_event = 'https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_event/track?APIVersion=0.6.0'
			dtlogUrl = 'http://dtlog.szy.cn'
			break
		default:
			sdo_bfn_pv = 'https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_pv/track?APIVersion=0.6.0'
			sdo_bfn_event = 'https://ztjy.cn-hangzhou.log.aliyuncs.com/logstores/sdo_bfn_event/track?APIVersion=0.6.0'
			dtlogUrl = 'http://dtlog.szy.cn'
			break
	}
	return  {
		sdo_bfn_pv: sdo_bfn_pv, // 阿里云pv url
		sdo_bfn_event: sdo_bfn_event,// 阿里云埋点 url
		dtlogUrl: dtlogUrl
	};
}

module.exports = api();
