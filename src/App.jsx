import React, { Component } from 'react';
import RHead from './layout/Head'
import RSider from './layout/Sider';
import RContent from './layout/Content'
import { SketchPicker } from 'react-color';
import { Layout, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        inlineCollapsed: true,
        isMobile: false,
        themeColor: localStorage.getItem('@primary-color') || '#1890ff',
        isShowSketchPicker: false
    }

    UNSAFE_componentWillMount() {
        this.setState({
            inlineCollapsed: window.innerWidth >= 900 ? false : true
        })
        this.setState({
            isMobile: window.innerWidth <= 450 ? true : false
        })

        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth <= 450 ? true : false
            })
        })
    }

    handlerTogglerCollapsed() {
        let { inlineCollapsed } = this.state;
        this.setState({
            inlineCollapsed: !inlineCollapsed
        });
    }
    un

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
                    <Layout>
                        {!this.state.isMobile &&
                            <Sider width={256} collapsed={this.state.inlineCollapsed}>
                                <RSider />
                            </Sider>}
                        <Content style={this.state.isMobile ? { padding: 0 } : {}}>
                            <RContent isMobile={this.state.isMobile}></RContent>

                            <div className={this.state.isShowSketchPicker ? 'color_picker_box color_picker_box_active' : 'color_picker_box'} >
                                <div className='color_picker_menu' onClick={e => { this.setState({ isShowSketchPicker: !this.state.isShowSketchPicker }) }}><Icon type="pic-right" className="color_picker" /></div>
                                <div>
                                    <SketchPicker color={this.state.themeColor} onChangeComplete={(e) => { this.handlerColorChange(e); }} />
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
