# szyreport

 
前端报数工具  


## 安装使用

1. 直接下载`dist`目录下的[szyreport.min.js](https://github.com/ztjy-fe/szyreport/blob/master/dist/szyreport.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="szyreport.min.js"></script>
  <script>
      var reportPV = szyreport.reportPV(params)
  </script>
```

### npm:
``` bash
$ npm install --save-dev szyreport
```


``` javascript

const szyreport = require('szyreport')
let params = {};
1.测试环境下调用：
let prefix = 'alpha' // 测试环境
szyreport.reportPV(params, prefix)//测试环境pv报数
szyreport.reportEvent(params, prefix）// 测试环境埋点报数
2.线上环境下调用
szyreport.reportPV(params)//线上环境pv报数
szyreport.reportEvent(params）// 线上环境埋点报数
```


