import React from 'react';
import menus from '../router/config'
import { Menu, Icon } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import FreeScrollBar from 'react-free-scrollbar'

const { SubMenu } = Menu;

let MenuList = menus

const renderMenuItem = item => {
    return <Menu.Item key={item.key}>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
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

    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        MenuList = this.reorder(MenuList, result.source.index, result.destination.index);
    };

    render() {
        return (
            <div id="menu" style={{ width: '100%', height: '100%', userSelect: 'none' }}>
                <FreeScrollBar autohide={true} timeout={300}>
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
                    </DragDropContext>
                    {/* 退出拖拽模式 */}
                    {/* <Menu
                    mode="inline"
                    multiple={false}
                >
                    {renderMenuList()}
                </Menu> */}
                </FreeScrollBar>
            </div>
        );
    }
}

export default Sider;
