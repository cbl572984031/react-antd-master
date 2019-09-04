import * as type from './actionTypes'

export const add = (data, id) => {
    return {
        type: type.ADD_COMMENT,
        data,
        id
    }
}

export const remove = () => {
    return {
        type: type.REMOVE_COMMENT
    }
}