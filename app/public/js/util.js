Date.prototype.Format = function (fmt) { //author: meizz
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

let weeklyCalculation=(date)=>{
    return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()]
}

const apiUrl={
    'weatherUrl':'api/weatherUrl',
    'weatherBaiDuUrl':'http://api.map.baidu.com/telematics/v3/weather?location=%E5%AE%9C%E5%85%B4&output=json&ak=0CWwKLVyT5cX8pHWM66cqDd6'
}

const util={
    apiUrl,
    weeklyCalculation
}

export default util
