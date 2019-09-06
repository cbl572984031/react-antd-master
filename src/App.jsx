import React, { Component } from 'react';
import RHead from './layout/Head'
import RSider from './layout/Sider';
import RContent from './layout/Content'
import { SketchPicker } from 'react-color';
import { Layout, Icon, Popover } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        inlineCollapsed: true,
        isMobile: false,
        themeColor: localStorage.getItem('@primary-color') || '#1890ff'
    }

    componentWillMount() {
        if (window.innerWidth >= 900) {
            this.setState({
                inlineCollapsed: false
            })
        } else if (window.innerWidth <= 450) {
            this.setState({
                isMobile: true
            })
        }
    }

    handlerTogglerCollapsed() {
        let { inlineCollapsed } = this.state;
        this.setState({
            inlineCollapsed: !inlineCollapsed
        });
    }

    handlerColorChange(e) {
        this.setState({
            themeColor: e.hex
        })
        localStorage.setItem('@primary-color', e.hex);
        window.less.modifyVars({
            '@primary-color': e.hex
        })
    }

    render() {
        return (
            <div className="App">
                <Layout style={{ height: '100%' }}>
                    <Header>
                        <RHead isMobile={this.state.isMobile} collapsed={this.state.inlineCollapsed} TogglerCollapsed={e => this.handlerTogglerCollapsed()}></RHead>
                    </Header>
                    <Layout >
                        {!this.state.isMobile &&
                            <Sider width={256} collapsed={this.state.inlineCollapsed}>
                                <RSider />
                            </Sider>}
                        <Content>
                            <RContent isMobile={this.state.isMobile}></RContent>

                            <Popover placement="leftTop" content={
                                <SketchPicker color={this.state.themeColor} onChangeComplete={(e) => { this.handlerColorChange(e); }} />
                            } trigger="click">
                                <div className='color_picker_menu'>
                                    <Icon type="pic-right" className="color_picker" />
                                </div>
                            </Popover>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
