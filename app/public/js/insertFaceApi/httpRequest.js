import axios from 'axios'
import {message} from 'antd'
import qs from 'qs'

/**
 * http get请求
 * @param url 请求地址
 * @param successCallBack 成功回调函数
 * @param errorCallBack 错误回调函数
 * @constructor
 */
let HttpGet=(url,successCallBack,errorCallBack)=>{
    axios.get(url).then(function (resopne) {
        successCallBack?successCallBack(resopne.data):message.warning('告警接口请求成功,程序未处理!')
    }).catch(function (err) {
        console.log(err);
        errorCallBack?errorCallBack(err):message.error('接口请求失败')
    })
}

/**
 * http post请求
 * @param url 请求地址
 * @param dataObject 请求参数()
 * @param successCallback 成功回调函数
 * @param errorCallBack 错误回调函数
 * @constructor
 */
let HttpPost=(url,dataObject,successCallback,errorCallBack)=>{
    dataObject=dataObject?qs.stringify(dataObject):dataObject;
    axios({
        method:'post',
        url:url,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:dataObject
    }).then(function (respone) {
        successCallback?successCallback(respone.data):message.warning('接口数据请求成功,但未处理')
    }).catch(function (err) {
        console.log(err)
        errorCallBack?errorCallBack(err):message.error('接口请求失败')
    })
}

export default {
    HttpGet:HttpGet,
    HttpPost:HttpPost
}