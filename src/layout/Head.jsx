import React, { Component } from 'react';
import { Icon, Dropdown, Menu, Popover, Layout, Drawer, Avatar, message } from 'antd';
import RSider from '../layout/Sider'
import { Link } from 'react-router-dom'
import screenfull from 'screenfull'

const { Sider } = Layout

class Head extends Component {
    state = {
        visible: false
    }

    visibleClose() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handlerScreenfull() {
        if (!screenfull.enabled) {
            message.error('暂不支持全屏')
            return
        }
        screenfull.toggle()
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/login">退出登录</Link>
                </Menu.Item>
            </Menu>
        );
        const content = (
            <Layout>
                <Sider width={80} style={{ height: '300px' }} collapsed={true}>
                    <RSider></RSider>
                </Sider>
            </Layout>
        )
        return (
            <div id='header'>
                {this.props.isMobile ? (
                    <React.Fragment>
                        {/* 左侧滑出 */}
                        <Icon className='menu_trigger' onClick={e => { this.visibleClose() }} type={'menu-unfold'} />
                        <Drawer
                            onClose={e => { this.visibleClose() }}
                            placement="left"
                            closable={false}
                            visible={this.state.visible}
                            width={80}
                            className='mobile_Drawer'
                        >
                            <Layout style={{ height: '100%' }}>
                                <Sider width={60} collapsed={true}>
                                    <RSider></RSider>
                                </Sider>
                            </Layout>
                        </Drawer>

                        {/* 气泡式卡片浮层 */}
                        <Popover className='menu02' placement="bottom" content={content} trigger="click">
                            <Icon className='menu_trigger' type={'down-circle'} />
                        </Popover>
                    </React.Fragment>
                ) :
                    <React.Fragment >
                        <div className={this.props.collapsed ? 'mini_logo' : 'logo'}></div>
                        <Icon className='menu_trigger' type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={() => { this.props.TogglerCollapsed(); }} />
                    </React.Fragment>
                }
                <div className="userInfo">
                    <Icon onClick={e => { this.handlerScreenfull() }} style={{ fontSize: '20px', color: '#fff', verticalAlign: 'top', marginTop: '22px', marginRight: '20px' }} type="fullscreen" />
                    <Avatar className="avatar" icon="user" />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <span className="userName">
                            {localStorage.getItem('userName') || '游客'} <Icon type="down" />
                        </span>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default Head;