
export const todoActionTypes = {
    REQUEST_TODOS: 'REQUEST_TODOS',
    RECEIVE_TODOS: 'RECEIVE_TODOS',
    SET_TODOS:'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_ITEM',
}

function requestTodos(){
    return {
        type: todoActionTypes.REQUEST_TODOS,
    }
}

const receiveTodos = (payload) => {
    return {
        type: todoActionTypes.RECEIVE_TODOS,
        payload: payload,
    }
}

export function fetchTodos() {
    return function (dispatch) {
        dispatch(requestTodos());
        return fetch(`http://localhost:3004/todos`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。
                dispatch(receiveTodos(json))
            )
        }
}

export const setTodo = (payload) => {
    return {
        type: todoActionTypes.SET_TODOS,
        payload: payload,
    }
}
export const addTodo = (payload) => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload: payload
    }
};
export const deleteTodo = (payload) => {
    return {
        type: todoActionTypes.DELETE_ITEM,
        payload: payload
    }
}