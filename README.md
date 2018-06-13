# reactExercise
react框架练手

## 需要电脑安装的npm插件
    npm i rimraf -g
    
### 项目集成插件
    1. postcss  
    2. postcss-cssnext 样式处理,会自动追加浏览器前缀  
    3. [ant design](https://ant.design/docs/react/introduce-cn) UI库  
    4. [react-icons](https://github.com/gorangajic/react-icons) 字体图标库  
    5. [axios](https://github.com/axios/axios) http请求库  
    6. [js-xlsx](https://github.com/SheetJS/js-xlsx) excel生成读取工具 兼容IE8以上  
    7. [js-cookie](https://github.com/js-cookie/js-cookie) cookies操作插件 兼容IE8以上  
    8. [DOM to Image](https://github.com/tsayen/dom-to-image) dom生成img图片,浏览器支持一般,请详细观看该插件github文档

### http请求使用说明

##### 项目中集成了http公共方法,使用的插件为axios http插件
    插件存放于根目录下app/public/js/insertFaceApi/httpRequest.js中
    
    1.HttpGet http get请求
        方法接收参数
            url 请求地址
            successCallBack 成功回调函数(如该参数无值,则将调用ant design 中的全局提示message方法)
            errorCallBack 错误回调函数  (如该参数无值,则将调用ant design 中的全局提示message方法)
    
    2.HttpPost http post请求
        方法接收参数
            url 请求地址
            dataObject 请求参数
            successCallback 成功回调函数(如该参数无值,则将调用ant design 中的全局提示message方法)
            errorCallBack 错误回调函数  (如该参数无值,则将调用ant design 中的全局提示message方法)
            
### 增加xlsx使用说明

##### 集成xlsx公共方法,使用插件为js-xlsx插件
    插件存放于根目录下app/public/js/xlsxProcess/xlsxProcess.js中
    
    1. ExcelWriteFile excel客户端导出
        方法接受参数:
            dataArray 数据集合 示例 [ ["基站名称", "基站地址", "小区编码(lac)", "扇区编码(cell_id或者ci)", "经度", "维度", "网络制式", "基站类型"]... ]
            fileName 下载文件名
            
        使浏览器进行file下载
        
        
### 增加cookie使用说明
[js-cookie](https://github.com/js-cookie/js-cookie)详细文档

    在需要使用的地方引用 `import * as Cookies from "js-cookie"`
    然后即可在内部使用 Cookies.get()...