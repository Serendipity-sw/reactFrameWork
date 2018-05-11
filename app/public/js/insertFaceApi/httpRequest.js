import 'whatwg-fetch'
import simulationData from "../simulationData/simulationData";

let checkStatus=(response)=>{
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

let parseJSON=(response) =>{
    return response
}

let getJson=(url,successCallback,errorCallback)=>{
    if (process.env.NODE_ENV==='development'){
        if (successCallback) {
            successCallback(simulationData[url])
        }
        return
    }
    fetch(url).then(parseJSON).then(function (dataJson) {
        if (successCallback) {
            successCallback(dataJson)
        }
    }).catch(function(error){
        if (errorCallback) {
            errorCallback(error)
        }
    })
}

let postJson=(url,dataMap,successCallback,errorCallback)=>{
    if (process.env.NODE_ENV==='development'){
        if (successCallback) {
            successCallback(simulationData[url])
        }
        return
    }
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dataMap)
    }).then(checkStatus).then(parseJSON)
        .then(function (data) {
            if (successCallback) {
                successCallback(data)
            }
        }).catch(function (error) {
        if (errorCallback) {
            errorCallback(error)
        }
    })
}
export default {
    'postJson':postJson,
    'getJson':getJson
}