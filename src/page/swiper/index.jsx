import React, { Component } from 'react';
import FragmentBanner from './swiper'
import { connect } from 'react-redux';
import a1 from '@/assets/imgs/Swiper/a1.png'
import a2 from '@/assets/imgs/Swiper/a2.png'
import a3 from '@/assets/imgs/Swiper/a3.png'
import a4 from '@/assets/imgs/Swiper/a4.png'
import a5 from '@/assets/imgs/Swiper/a5.png'

class Swiper extends Component {
    state = {
        Banner: {}
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        let width = this.props.isMobile ? document.getElementById('centent').offsetWidth : document.getElementById('centent').offsetWidth - 30
        this.Banner = new FragmentBanner({
            container: '#banner_one', //选择容器 必选
            imgs: [a1, a2, a3, a4, a5], //图片集合
            size: {
                width,
                height: 400
            },
            type: 2,
        })
    }

    componentWillUnmount() {
        this.Banner.clear()
    }

    render() {
        return (
            <div className="banner" id="banner_one">
                <div className="banner-view"></div>
                <div className="banner-btn"></div>
                <div className="banner-number"></div>
                <div className="banner-progres"></div>
            </div>
        );
    }
}

export default connect(state => ({
    isMobile: state.isMobile
}))(Swiper);
/**
 * 2019-09-09 炫酷的轮播图效果
 */