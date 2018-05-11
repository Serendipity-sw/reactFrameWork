import React from 'react';
import 'antd/dist/antd.min.css'
import '../../public/css/index.pcss';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>这是头部</div>
                    <i className="logo"/>
                </div>
                <div className="bottom">
                    这是底部
                </div>
            </div>
        );
    }
}

export default Index;