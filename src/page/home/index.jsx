import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { add, remove } from '@/store/comment/action';

const { TextArea } = Input;

class CommentList extends React.Component {
    render() {
        const comments = this.props.comments
        return (
            <List
                dataSource={comments}
                itemLayout="horizontal"
                renderItem={props =>
                    <Comment {...props}
                        actions={props.id ? [<span
                            onClick={e => { this.props.handleReply(props.id) }}
                            key="comment-list-reply-to-0" >Reply to</span>
                        ] : ''
                        }
                    >
                        {props.children && props.children.length ?
                            <CommentList handleReply={e => { this.props.handleReply(e) }} comments={props.children} /> : ''}
                    </Comment>
                }
            />
        )
    }
}

class Home extends React.Component {
    state = {
        value: '',
        id: null,
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        const obj = {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
        }
        if (!this.state.id) {
            obj.id = this.props.comments.length + 1
            obj.children = []
        }
        this.props.add(obj, this.state.id)
        this.setState({
            value: '',
            id: null
        });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    setReplyId = (id) => {
        this.setState({
            id
        })
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                {this.props.comments.length > 0 && <CommentList handleReply={e => { this.setReplyId(e) }} comments={this.props.comments} />}
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <div>
                            <Form.Item>
                                <TextArea rows={4} onChange={e => { this.handleChange(e) }} value={value} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" onClick={e => { this.handleSubmit(e) }} type="primary">
                                    Add Comment
                                </Button>
                            </Form.Item>
                        </div>
                    }
                />
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    comments: state.Comment
}), {
        add,
        remove
    })(Home)
