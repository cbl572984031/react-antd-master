import React, { Component } from 'react';
import { Row, Col, Card, Tag } from 'antd';
const { CheckableTag } = Tag;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class Tabs extends Component {
    state = {
        selectedTags: [],
    };

    componentDidMount() {
        this.props.setBG(false)
    }

    preventDefault = e => {
        e.preventDefault()
    }

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }

    render() {
        const { selectedTags } = this.state;
        return (
            <Row gutter={16} className="tabs_dome">
                <Col sm={12}>
                    <Card bordered={false}>
                        <Tag>Tag 1</Tag>
                        <Tag>
                            <a href=''>Link</a>
                        </Tag>
                        <Tag closable>
                            Tag 2
                        </Tag>
                        <Tag closable onClose={this.preventDefault}>
                            Prevent Default
                        </Tag>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card bordered={false}>
                        <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
                        {tagsFromServer.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={checked => this.handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card bordered={false}>
                        <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                        <div>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                        </div>
                        <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                        <div>
                            <Tag color="#f50">#f50</Tag>
                            <Tag color="#2db7f5">#2db7f5</Tag>
                            <Tag color="#87d068">#87d068</Tag>
                            <Tag color="#108ee9">#108ee9</Tag>
                        </div>
                    </Card>
                </Col>

            </Row>
        );
    }
}

export default Tabs;