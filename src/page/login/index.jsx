import React, { Component } from 'react'
import Stars from "@/assets/js/star"
import { getVCcode } from '@/axios/index'
import { withRouter } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowText: false,
            text: ''
        }
    }

    setText = (bool, value) => {
        this.setState({
            isShowText: bool,
            text: value
        })
    }

    componentDidMount() {
        this.canvas();
    }

    canvas = () => {
        let canvas = document.querySelector('#canvas'),
            ctx = canvas.getContext('2d'),
            width = window.innerWidth,
            height = window.innerHeight,
            stars = new Stars(ctx, width, height, 200),
            count = 0
        canvas.width = width
        canvas.height = height

        const frame = () => {
            count++
            count % 10 === 0 && stars.blink()
            stars.flicker()
            stars.draw()
            requestAnimationFrame(frame)
        }
        frame()
    }

    render() {
        return (
            <div className="login-box">
                <div className="ipt" style={this.state.isShowText ? {} : { display: 'none' }}>
                    <p>>: <span>{this.state.text}</span></p>
                </div>
                <canvas id="canvas"></canvas>
                <img className="bg" draggable="false" src={require('@/assets/imgs/Login/react.png')} alt="背景" />
                <div className="title">
                    {/* <img src={require('../logo.svg')} draggable="false" alt="react" className="react" /> */}
                    <p id="title">react admin</p>
                </div>
                <LoginForm SetText={this.setText} {...this.props}></LoginForm>
            </div>
        )
    }
}


class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            VCcode: '',
            id: '',
            password: '',
            codeipt: '',
        }
        // this.getcode()
    }

    getcode(e) {
        getVCcode().then(res => {
            if (res.data.code === '100') {
                this.setState({
                    VCcode: res.data.data,
                })
            }
        }).catch(err => {

        })
    }

    blurVerification(e) {
        if (e.target.value.replace(/\s*/g, '').length <= 0) {
            e.target.setAttribute('style', 'border-color:red');
        } else {
            e.target.setAttribute('style', '');
        }
        this.props.SetText(false, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // if (this.state.id.replace(/\s*/g, '').length <= 0) {
        //     message.warning('用户名不能为空!')
        //     return
        // }
        // if (this.state.password.replace(/\s*/g, '').length <= 0) {
        //     message.warning('密码不能为空!')
        //     return
        // }
        // if (this.state.codeipt.replace(/\s*/g, '').length <= 0) {
        //     message.warning('验证码不能为空!')
        //     return
        // }

        // let obj = {
        //     loginName: this.state.id,
        //     password: this.state.password,
        //     captcha: this.state.codeipt,
        //     token: this.state.VCcode
        // }

        this.props.history.push('/')
    }

    render() {
        return (
            <div className="lodin">
                <div className="input-wrap" >
                    <label htmlFor="ID" className="ID_label"></label>
                    <input type="text" maxLength="18" onBlur={e => { this.blurVerification(e) }} onFocus={e => { this.props.SetText(true, e.target.value) }} onChange={e => { this.setState({ id: e.target.value }); this.props.SetText(true, e.target.value) }} placeholder="用户名/ID" id="ID" />
                </div>
                <div>
                    <label htmlFor="password" className="password_label"></label>
                    <input type="password" maxLength="18" onBlur={e => { this.blurVerification(e) }} onChange={e => { this.setState({ password: e.target.value }) }} placeholder="密码" id="password" />
                </div>
                <div>
                    <input type="text" onBlur={e => { this.blurVerification(e) }} onChange={e => { this.setState({ codeipt: e.target.value }) }} maxLength="4" placeholder="验证码" id="VCcode" />
                    <img className="VCcode" draggable="false" onClick={e => this.getcode(e)} src={'http://hxkt.api.4008990000.net/aerospace/auth/captcha?token=' + this.state.VCcode} alt="验证码" />
                </div>
                <div className="submit" onClick={e => { this.handleSubmit(e) }}>登录</div>
            </div>
        )
    }
}

export default withRouter(Login);
/**
 *  2019-09-09 直接搬以前写着玩的登录页
 */