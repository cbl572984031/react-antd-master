let isMobile = false

export default (state = isMobile, action = {}) => {
    if (action.type && action.hasOwnProperty('active')) {
        return action.active
    } else {
        return state
    }
}