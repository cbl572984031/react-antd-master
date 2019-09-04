import * as type from './actionTypes'
import React from 'react'
import moment from 'moment';

let commentList = [{
    id: '1',
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: <p>456</p>,
    datetime: moment().fromNow(),
    children: [
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>123</p>,
            datetime: moment().fromNow()
        }
    ]
}]

export const Comment = (state = commentList, action = {}) => {
    switch (action.type) {
        case type.ADD_COMMENT:
            if (action.id) {
                for (let i = 0; i < state.length; i++) {
                    if (state[i].id == action.id) {
                        state[i].children.push(action.data)
                    }
                }
                return Array.from(state)
            } else {
                return state.concat(action.data);
            }
        case type.REMOVE_COMMENT:
            return state;
        default:
            return state
    }
}