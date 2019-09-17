import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar'
import Router from '../router/index'

class Content extends Component {
    state = {
        isShowBG: true,
        pathname: this.props.location.pathname,
        listenEvent: null
    }

    setBG = (val) => {
        this.setState({
            isShowBG: val
        })
    }

    componentDidMount() {
        this.setState({
            listenEvent: this.props.history.listen(location => {
                if (this.state.pathname != location.pathname) {
                    this.setState({
                        isShowBG: true,
                        pathname: location.pathname
                    })
                }
            })
        })
    }

    componentWillUnmount() {
        // 卸载路由监听
        this.state.listenEvent()
    }

    render() {
        return (
            <div id='centent' style={this.props.isMobile ? {} : { borderRadius: '6px' }} style={this.state.isShowBG ? { background: '#fff' } : {}}>
                {
                    this.props.isMobile ?
                        <Router isMobile={this.props.isMobile} setBG={this.setBG}></Router>
                        :
                        <FreeScrollBar autohide={true} timeout={300}>
                            <Router isMobile={this.props.isMobile} {...this.props} setBG={this.setBG}></Router>
                        </FreeScrollBar>
                }
            </div>
        );
    }
}

export default Content;
