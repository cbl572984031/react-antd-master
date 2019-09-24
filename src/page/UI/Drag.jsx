import React, { Component } from 'react';
import { Row, Col, Card, Tag } from 'antd';
import FreeScrollBar from 'react-free-scrollbar'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
let MenuList = ['a', 'b', 'c', 'd', 'e']
class Drag extends Component {
    componentDidMount() {
        this.props.setBG(false)
    }

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
            <FreeScrollBar autohide={true} timeout={300}>
                {
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="xzcxz">
                            {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} >
                                    {MenuList.map((item, index) => {
                                        return <Draggable key={item} draggableId={item} index={index}>
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                    >
                                                        <Row gutter={16} className="drag_dome">
                                                            <Col sm={24}>
                                                                <Card>{item}</Card>
                                                            </Col>
                                                        </Row>
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

                }
            </FreeScrollBar>
        );
    }
}

export default Drag;