# reactFrameWork
react脚手架

## 需要电脑安装的npm插件
    npm i rimraf -g
    
### 推荐插件
1. [ant design](https://ant.design/docs/react/introduce-cn) UI库
2. [styled-components](https://github.com/styled-components/styled-components) 样式主导生成元素.
3. [Sortable](https://github.com/RubaXa/Sortable) react中可拖拽插件.地址:[demo](http://rubaxa.github.io/Sortable/)
4. [react-motion](https://github.com/chenglou/react-motion) react一些动画
5. [react-router-transition](https://github.com/maisano/react-router-transition) react路由动画
    
### 项目集成插件
    1. [postcss](https://github.com/postcss/postcss) 样式预处理插件,请追加的样式文件后缀名为.pcss结尾的文件  
    2. [autoprefixer](https://github.com/postcss/autoprefixer) 样式处理,会自动追加浏览器前缀      
    3. [react-icons](https://github.com/gorangajic/react-icons) 字体图标库  
    4. [axios](https://github.com/axios/axios) http请求库  
    5. [js-xlsx](https://github.com/SheetJS/js-xlsx) excel生成读取工具 兼容IE8以上  
    6. [js-cookie](https://github.com/js-cookie/js-cookie) cookies操作插件 兼容IE8以上  
    7. [DOM to Image](https://github.com/tsayen/dom-to-image) dom生成img图片,浏览器支持一般,请详细观看该插件github文档  
    8. [prop-types](https://github.com/facebook/prop-types) 新增类型判断,详细文档请查看github文档 增加该插件势必为了规范在编码过程中导致变量类型混乱使用情况,针对类似1与字符串"1" 这种傻傻不分的人  
    9. [proposal-object-rest-spread](https://github.com/tc39/proposal-object-rest-spread) 新增对象拆分及合并写法. (例:let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };   let n = { x, y, ...z };  )    详细请参考github文档   配置手册在[babel-plugin-transform-object-rest-spread](http://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/)  
    10. [moment](http://momentjs.com/docs/)时间格式化插件,详细文档,请查阅该插件的doc文档  
    11. [postcss-preset-env](https://github.com/csstools/postcss-preset-env)允许你使用未来的 CSS 特性

````注意项目启动及发布命令请详细参考根目录下package.json -> scripts 下命令 需主要使用到的命令为start及build````

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
