import React, { Component } from 'react';
import { Row, Col, Card, Switch } from 'antd';
import '../../assets/style/animate.css'

class Animation extends Component {
    state = {
        animated: false,
        animatedOne: -1
    };
    animatedAll = (checked) => {
        checked && this.setState({ animated: true });
        !checked && this.setState({ animated: false });

    };
    animatedOne = (i) => {
        this.setState({ animatedOne: i });
    };
    animatedOneOver = () => {
        this.setState({ animatedOne: -1 });
    };
    render() {
        const animations = [
            'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
            'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
            'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
            'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
            'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
            'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
            'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
            'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
            'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];
        return (
            <div className="animation-demo">
                <Row className="mb-m">
                    <span className="mr-s">全部动画(单个动画请移动鼠标)</span>
                    <Switch onChange={this.animatedAll} />
                </Row>
                <Row gutter={14}>
                    {animations.map((v, i) => (
                        <Col className="gutter-row" md={6} key={v}>
                            <div className="gutter-box"
                                onMouseEnter={() => this.animatedOne(i)}
                                onMouseLeave={this.animatedOneOver}
                            >
                                <Card
                                    className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated infinite' : ''} ${v}`}
                                >
                                    <div className="pa-m text-center">
                                        <h3>{v}</h3>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Animation;