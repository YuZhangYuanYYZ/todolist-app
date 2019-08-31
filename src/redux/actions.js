export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_ITEM',
    COMPLETE_TOGGLE: 'COMPLETE_TOGGLE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_ACTIVE'
}

export const showAll = () => {
    return {
        type: actionTypes.SHOW_ALL,
    }
}
export const showActive = () => {
    return {
        type: actionTypes.SHOW_ACTIVE,
    }
}
export const showCompleted = () => {
    return {
        type: actionTypes.SHOW_COMPLETED,
    }
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