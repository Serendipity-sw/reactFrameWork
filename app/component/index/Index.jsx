import React from 'react'
import '../../public/css/common.pcss'
import titleContentImg from '../../public/img/titleContent.png'
import 'antd/dist/antd.min.css'
import {HashRouter, NavLink, Route} from "react-router-dom";
import HeadLeft from "../common/HeadLeft";
import {Col, Row} from "antd";
import Weater from "../common/Weater";
import ExcelDown from "../excelDown/ExcelDown";

class Index extends React.Component {
    render() {
        return (
                <HashRouter>
                    <div className="allHeight">
                        <header>
                            <Row>
                                <Col span={5}>
                                    <HeadLeft key="HeadLeft"></HeadLeft>
                                </Col>
                                <Col span={11}>
                                    <img src={titleContentImg} alt="" key=""/>
                                </Col>
                                <Col span={3}>
                                    <NavLink to="/" className="headMenuList" activeClassName="selected" exact>
                                        <span className="name">客流分析</span>
                                        <span className="number">01</span>
                                    </NavLink>
                                    <NavLink to="/demo2" className="headMenuList" activeClassName="selected" exact>
                                        <span className="name">属性分析</span>
                                        <span className="number">02</span>
                                    </NavLink>
                                </Col>
                                <Col span={5}>
                                    <Weater></Weater>
                                </Col>
                            </Row>
                        </header>
                        <Route exact path="/" component={ExcelDown}/>
                        <Route exact path="/demo2" component={HeadLeft}/>
                    </div>
                </HashRouter>
        )
    }
}

export default Index