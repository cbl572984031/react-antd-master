import React from 'react';
import menus from '../router/config'
import { Menu, Icon } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import FreeScrollBar from 'react-free-scrollbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const { SubMenu } = Menu;

let MenuList = menus

const renderMenuItem = item => {
    return <Menu.Item key={item.key}>
        <Link to={item.key}>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </Menu.Item>
};

const renderSubMenu = item => {
    return <SubMenu
        key={item.key}
        title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                <span className="nav-text">{item.title}</span>
            </span>
        }
    >
        {item.subs.map(childer => renderMenuItem(childer))}
    </SubMenu>
}

/* eslint-disable no-unused-vars */
const renderMenuList = (list = MenuList) => {
    list = list.map(item => {
        if (item.subs) {
            return renderSubMenu(item)
        } else {
            return renderMenuItem(item)
        }
    })
    return list
}


class Sider extends React.Component {

    state = {
        selectedKeys: ['/']
    }

    UNSAFE_componentWillMount() {
        this.setState({
            selectedKeys: [window.location.pathname]
        })
    }

    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    onDragEnd = result => {
        // 拖拽完成
        if (!result.destination) {
            return;
        }
        MenuList = this.reorder(MenuList, result.source.index, result.destination.index);
    };

    handleMenuClick = (item) => {
        // 点击菜单
        this.setState({
            selectedKeys: [item.key]
        })
    }

    render() {
        const menuStyle = { width: '100%', height: '100%', userSelect: 'none' }
        return (
            <div id="menu" style={menuStyle}>
                <FreeScrollBar autohide={true} timeout={300}>
                    {
                        !this.props.isMobile ?
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <Droppable droppableId="droppable">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps} >
                                            {MenuList.map((item, index) => {
                                                return <Draggable key={item.key} draggableId={item.key} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.dragHandleProps}
                                                                {...provided.draggableProps}
                                                            >
                                                                <Menu
                                                                    mode="inline"
                                                                    multiple={false}
                                                                    onSelect={this.handleMenuClick}
                                                                    selectedKeys={this.state.selectedKeys}
                                                                >
                                                                    {item.subs
                                                                        ? renderSubMenu(item)
                                                                        : renderMenuItem(item)}
                                                                </Menu>
                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext> :
                            < Menu
                                mode="inline"
                                multiple={false}
                            >
                                {renderMenuList()}
                            </Menu>
                    }
                </FreeScrollBar>
            </div >
        );
    }
}

export default connect(state => ({
    isMobile: state.isMobile
}), {})(Sider); 
