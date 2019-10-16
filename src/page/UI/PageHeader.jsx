import React, { Component } from 'react';
import { Row, Col, Card, PageHeader, Tag, Button, Statistic, Descriptions } from 'antd';


class PageHeaders extends Component {
    componentDidMount() {
        this.props.setBG(false)
    }

    render() {
        return (
            <Row gutter={16} className="pageHeader_dome">
                <Col sm={24}>
                    <Card>
                        <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />
                    </Card>
                </Col>
                <Col sm={24}>
                    <Card>
                        <PageHeader
                            onBack={() => null}
                            title="Title"
                            subTitle="This is a subtitle"
                            extra={[
                                <Button key="3">Operation</Button>,
                                <Button key="2">Operation</Button>,
                                <Button key="1" type="primary">
                                    Primary
                                </Button>,
                            ]}
                        >
                            <Descriptions size="small" column={3}>
                                <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                                <Descriptions.Item label="Association">
                                    <a href="">421421</a>
                                </Descriptions.Item>
                                <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                                <Descriptions.Item label="Remarks">
                                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>
                        </PageHeader>
                        <br />
                        <PageHeader
                            onBack={() => null}
                            title="Title"
                            tags={<Tag color="blue">Running</Tag>}
                            subTitle="This is a subtitle"
                            extra={[
                                <Button key="3">Operation</Button>,
                                <Button key="2">Operation</Button>,
                                <Button key="1" type="primary">
                                    Primary
                                </Button>,
                            ]}
                        >
                            <Row type="flex">
                                <Statistic title="Status" value="Pending" />
                                <Statistic
                                    title="Price"
                                    prefix="$"
                                    value={568.08}
                                    style={{
                                        margin: '0 32px',
                                    }}
                                />
                                <Statistic title="Balance" prefix="$" value={3345.08} />
                            </Row>
                        </PageHeader>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default PageHeaders;