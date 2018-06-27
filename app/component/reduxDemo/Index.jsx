import React from 'react'
import {connect} from 'react-redux'
import {addStudent,update} from '../../public/js/reducers/user'
import Fex from "./Fex";

@connect(
    state=>({userObj:state.user}),
    {addStudent,update}
)

class Index extends React.Component{

    addUser=()=>{
        let obj={
            id:"1",
            name:'shaowei'
        },sf=this.props
        this.props.addStudent(obj)
    }

    updateUser=()=>{
        let ob={
            id:"1",
            object:{
                id:"2",
                name:"gloomysw"
            }
        }
        this.props.update(ob)
    }

    render(){
        return(
            <div>
                <label key="321">
                    {JSON.stringify(this.props.userObj)}
                </label>
                <button key="123" onClick={this.addUser}>新增</button>
                <button key="wrweqr" onClick={this.updateUser}>删除</button>
                <br/>
                <Fex gloomysw="qwe"></Fex>
            </div>
        )
    }
}

export default Index