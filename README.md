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
const reportPV = szyreport.reportPV(params)
const reportEvent = szyreport.reportEvent(params)
```


