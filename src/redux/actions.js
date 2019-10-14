export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_ITEM',
    COMPLETE_TOGGLE: 'COMPLETE_TOGGLE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    RECEIVE_TODOS: 'RECEIVE_TODOS',
    SET_TODOS:'SET_TODOS',
    SAVE_DATE:"SAVE_DATE",
    JUDGE_DOUBLE_CLICK:"JUDGE_DOUBLE_CLICK"
}

export const saveDate = (payload) => {
    return {
        type: actionTypes.SAVE_DATE,
        payload: payload,
    }
}

export const setTodo = (payload) => {
    return {
        type: actionTypes.SET_TODOS,
        payload: payload,
    }
}
export const receiveTodos = (payload) => {
    return {
        type: actionTypes.RECEIVE_TODOS,
        payload: payload,
    }
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
    
export const judgeDoubleClick = (payload) => {
        return {
            type: actionTypes.JUDGE_DOUBLE_CLICK,
            payload: payload
        }
    }

export default actionTypes;
