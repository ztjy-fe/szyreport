# szyreport

 
前端报数工具  


### 安装使用

1. 直接下载[https://static.szy.cn/javascript/vendor/log/szyreport.min.js](https://static.szy.cn/javascript/vendor/log/szyreport.min.js)使用 
 
2. 使用cdn

``` html
  <script src="https://static.szy.cn/javascript/vendor/log/szyreport.min.js"></script>
  <script>
      let params = {
        data: {}, //页面报数参数（必填）
        prefix:'alpha',// 测试环境'alpha'，线上环境''（选填）
        callback: () =>{} //reportEvent （选填）
      }
      szyreport.reportPV(params);// PV 报数
      szyreport.reportEvent(params);// 埋点报数
  </script>
```
3. 使用npm安装
``` bash
$ npm install --save-dev szyreport
```
3.1. 页面中引入

``` javascript
// 使用common.js方式引入
const szyreport = require('szyreport')
```
#### 或者：
```
// 使用ES6方式引入
import szyreport from 'szyreport'
```
3.2. 调用：
```
let params = {
    data: {}, //页面报数参数（必填）
    prefix:'alpha',// 测试环境'alpha'，线上环境''（选填）
    callback: () =>{} //reportEvent （选填）
}
const prefix = 'alpha' // 测试环境
szyreport.reportPV(params); //测试环境pv报数   
szyreport.reportEvent(params);// 测试环境埋点报数

```
