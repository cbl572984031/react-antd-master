import React, { Component } from 'react';
import { Row, Col, Card, Menu, Dropdown, Button, Icon } from 'antd';

const menu1 = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
      </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            <Icon type="user" />
            3rd item
      </Menu.Item>
    </Menu>
);

class Dropdowns extends Component {
    componentDidMount() {
        this.props.setBG(false)
    }

    render() {
        return (
            <Row gutter={16} className="dropdown_dome">
                <Col sm={12}>
                    <Card bordered={false}>
                        <Dropdown overlay={menu1} placement="bottomLeft">
                            <Button>bottomLeft</Button>
                        </Dropdown>
                        <Dropdown overlay={menu1} placement="bottomCenter">
                            <Button>bottomCenter</Button>
                        </Dropdown>
                        <Dropdown overlay={menu1} placement="bottomRight">
                            <Button>bottomRight</Button>
                        </Dropdown>
                        <br />
                        <Dropdown overlay={menu1} placement="topLeft">
                            <Button>topLeft</Button>
                        </Dropdown>
                        <Dropdown overlay={menu1} placement="topCenter">
                            <Button>topCenter</Button>
                        </Dropdown>
                        <Dropdown overlay={menu1} placement="topRight">
                            <Button>topRight</Button>
                        </Dropdown>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card bordered={false}>
                        <Dropdown.Button overlay={menu2}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button overlay={menu2} icon={<Icon type="user" />}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button overlay={menu2} disabled>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown overlay={menu2}>
                            <Button>
                                Button <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card bordered={false}>
                        <Dropdown overlay={menu2} trigger={['contextMenu']}>
                            <span style={{ userSelect: 'none' }}>Right Click on Me</span>
                        </Dropdown>
                        <Dropdown overlay={menu2} trigger={['click']}>
                            <Button>Click on Me</Button>
                        </Dropdown>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Dropdowns;