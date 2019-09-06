import React, { Component } from 'react';
import RHead from './layout/Head'
import RSider from './layout/Sider';
import RContent from './layout/Content'

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        inlineCollapsed: true,
        isMobile: false
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
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
