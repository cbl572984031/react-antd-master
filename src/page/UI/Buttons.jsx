import React, { Component } from 'react';
import { Button, Row, Col, Card, Radio, Icon } from 'antd';

class UI_Button extends Component {
    state = {
        size: 'large',
        loading: false,
        iconLoading: false
    };

    componentDidMount() {
        this.props.setBG(false)
    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    render() {
        const { size } = this.state;
        return (
            <Row gutter={16} className="button_dome">
                <Col sm={12}>
                    <Card bordered={false}>
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="danger">Danger</Button>
                        <Button type="link">Link</Button>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card bordered={false}>
                        <Button type="primary" loading>
                            Loading
                        </Button>
                        <Button type="primary" size="small" loading>
                            Loading
                        </Button>
                        <br />
                        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                            Click me!
                        </Button>
                        <Button
                            type="primary"
                            icon="poweroff"
                            loading={this.state.iconLoading}
                            onClick={this.enterIconLoading}
                        >
                            Click me!
                        </Button>
                        <br />
                        <Button type="primary" loading />
                        <Button type="primary" shape="circle" loading />
                        <Button type="danger" shape="round" loading />
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card bordered={false}>
                        <Radio.Group value={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                        <br />
                        <br />
                        <Button type="primary" size={size}>
                            Primary
                        </Button>
                        <Button size={size}>Normal</Button>
                        <Button type="dashed" size={size}>
                            Dashed
                        </Button>
                        <Button type="danger" size={size}>
                            Danger
                        </Button>
                        <Button type="link" size={size}>
                            Link
                        </Button>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card bordered={false}>
                        <Button.Group>
                            <Button>Cancel</Button>
                            <Button>OK</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button disabled>L</Button>
                            <Button disabled>M</Button>
                            <Button disabled>R</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button>L</Button>
                            <Button>M</Button>
                            <Button>R</Button>
                        </Button.Group>
                        <br />
                        <Button.Group>
                            <Button type="primary">
                                <Icon type="left" />
                                Go back
                            </Button>
                            <Button type="primary">
                                Go forward
                            <Icon type="right" />
                            </Button>
                        </Button.Group>
                        <Button.Group>
                            <Button type="primary" icon="cloud" />
                            <Button type="primary" icon="cloud-download" />
                        </Button.Group>
                        <Button.Group>
                            <Button type="primary" size="small" icon="cloud" />
                            <Button type="primary" size="small" icon="cloud-download" />
                        </Button.Group>
                    </Card>
                </Col>
            </Row >
        );
    }
}

export default UI_Button;