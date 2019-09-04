import React, { Component } from 'react';
import { Switch } from 'antd';
import { SketchPicker } from 'react-color';
import SiderMenu from './layout/Sider';
import Form from './page/test';
import Head from './layout/Head'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        inlineCollapsed: false,
        themeColor: localStorage.getItem('@primary-color') || '#1890ff'
    }

    handlerColorChange(e) {
        this.setState({
            themeColor: e.hex
        })
        localStorage.setItem('@primary-color', e.hex);
        window.less.modifyVars({
            '@primary-color': e.hex,
            '@border-color-base': e.hex
        })
    }

    handlerTogglerCollapsed() {
        let { inlineCollapsed } = this.state;
        this.setState({
            inlineCollapsed: !inlineCollapsed
        });
    }

    render() {
        return (
            <div className="App">
                <Layout style={{ height: '100%' }}>
                    <Header>Header<Switch defaultChecked onChange={() => { this.handlerTogglerCollapsed(); }} /></Header>
                    <Layout >
                        <Sider                 breakpoint="lg"
 width={256} collapsed={this.state.inlineCollapsed}>
                            <SiderMenu />
                        </Sider>
                        <Content>
                            <SketchPicker color={this.state.themeColor} onChangeComplete={(e) => { this.handlerColorChange(e); }} />
                            <Form />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
