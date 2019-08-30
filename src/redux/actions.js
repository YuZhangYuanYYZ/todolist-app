export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_ITEM',
    COMPLETE_TOGGLE: 'COMPLETE_TOGGLE'
}

export const addTodo = (payload) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: payload
    }
};
export const completeToggle = (payload) => {
    return {
        type: actionTypes.COMPLETE_TOGGLE,
        payload: payload
    }
};
export const deleteTodo = (payload) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: payload
    }
}

export default actionTypes;