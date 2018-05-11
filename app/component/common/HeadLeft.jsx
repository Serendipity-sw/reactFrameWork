import React from 'react'
import ChinaMobileLog from '../../public/img/chinaMobil.png'
import YixingLogo from '../../public/img/yixingLogo.png'
import '../../public/css/common/head.pcss'


class HeadLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoImgArray: [
                {imgPath: YixingLogo, className: 'webLogo'},
                {imgPath: ChinaMobileLog, className: 'webLogo'}
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.logoImgArray.map((item,index) => <img src={item.imgPath} className={item.className} alt="" key={index} />)
                }
            </div>
        )
    }
}

export default HeadLeft