import React, { Component } from 'react';
import { Row, Col, Card, Steps, Icon } from 'antd';
const { Step } = Steps;

export default class extends Component {
    state = {
        current: 0,
    };

    componentDidMount() {
        this.props.setBG(false)
    }

    onChange = current => {
        this.setState({ current });
    };

    render() {
        const current = this.state.current
        return (
            <Row gutter={16} className="steps_dome">
                <Col sm={24}>
                    <Card>
                        <Steps current={1}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </Card>
                </Col>
                <Col sm={24}>
                    <Card>
                        <Steps size="small" current={1}>
                            <Step title="Finished" />
                            <Step title="In Progress" />
                            <Step title="Waiting" />
                        </Steps>
                    </Card>
                </Col>
                <Col sm={24}>
                    <Card>
                        <Steps>
                            <Step status="finish" title="Login" icon={<Icon type="user" />} />
                            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                        </Steps>
                    </Card>
                </Col>
                <Col sm={24}>
                    <Card>
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="Step 1" description="This is a description." />
                            <Step title="Step 2" description="This is a description." />
                            <Step title="Step 3" description="This is a description." />
                        </Steps>
                    </Card>
                </Col>
            </Row>
        );
    }
}