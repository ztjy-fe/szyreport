# szyreport

 
前端报数工具  


## 安装使用

1. 直接下载[https://static.szy.cn/javascript/vendor/log/szyreport.min.js](https://static.szy.cn/javascript/vendor/log/szyreport.min.js)使用  


浏览器:
``` html
  <script src="https://static.szy.cn/javascript/vendor/log/szyreport.min.js"></script>
  <script>
      var reportPV = szyreport.reportPV(params)
  </script>
```
2. 使用npm安装
``` bash
$ npm install --save-dev szyreport
```


``` javascript

const szyreport = require('szyreport')
let params = {};
```

2.1.测试环境下调用：
```
const prefix = 'alpha' // 测试环境
szyreport.reportPV(params, prefix)//测试环境pv报数
szyreport.reportEvent(params, prefix,function(){ // 测试环境埋点报数
    console.log(123)
}）

```
2.2.线上环境下调用
```
szyreport.reportPV(params)//线上环境pv报数
szyreport.reportEvent(params,undefined,function(){ // 线上环境埋点报数
    console.log(123)
}）
```


