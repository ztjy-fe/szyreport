# szyreport

 
前端报数工具  


### 安装使用

1. 直接下载[https://static.szy.cn/javascript/vendor/log/szyreport.min.js](https://static.szy.cn/javascript/vendor/log/szyreport.min.js)使用 
 
2. 使用cdn

``` html
  <script src="https://static.szy.cn/javascript/vendor/log/szyreport.min.js"></script>
  <script>

  </script>
```
3. 使用npm安装
``` bash
$ npm install --save-dev szyreport
```
3.1. 页面中引入

``` javascript
// 使用common.js方式引入
const szyreport = require('szyreport');
```
#### 或者：
```
// 使用ES6方式引入
import szyreport from 'szyreport'
```
### 调用：
```
    // pv报数 参数
    const pvData = {
        'status': '', //状态
        'trial': '',//试看(选填)
        'stay_time': '',//时长(选填)
        'progress': '',//浏览进度(选填)
        'page_category': '',//页面大类(选填)
        'page': '',// 页面(选填)
        'page_id': '',//页面ID(选填)
        'parm': '',//自定义参数(选填)
        'f_page': '',//来路页面(选填)
        'f_page_id': '',//来路页面ID(选填)
        'f_page_location': '',//来路页面位置(选填)
        'student_id': '',//学生ID(必填)
        'school_id': '',//学校ID(必填)
        'user_id': '',//账号ID(必填)
     };
    // event报数 参数
    const eventData = {
        'event_id': '', //事件ID
        'obj_type': '',//事件对象类型(选填)
        'obj_id': '',//事件对象ID(选填)
        'parm': '',//自定义参数(选填)
        'f_page': '',//来路页面(选填)
        'f_page_id': '',//来路页面ID(选填)
        'f_page_location': '',//来路页面位置(选填)
        'student_id': '',//学生ID(必填)
        'school_id': '',//学校ID(必填)
        'user_id': '',//账号ID(必填)
    };
    
    let pvParams = {
        data: pvData, //页面报数参数（必填）
        prefix:'alpha',// 测试环境'alpha'，线上环境''（选填）
    }
    let eventParams = {
        data: eventData, //页面报数参数（必填）
        prefix:'alpha',// 测试环境'alpha'，线上环境''（选填）
        callback: () =>{} //埋点报数时需要的回调函数 （选填）
    }
    szyreport.reportPV(pvParams);// PV 报数
    szyreport.reportEvent(eventParams);// 埋点报数

```
