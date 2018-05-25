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