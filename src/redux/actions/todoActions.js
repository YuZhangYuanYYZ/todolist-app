
export const todoActionTypes = {
    REQUEST_TODOS: 'REQUEST_TODOS',
    RECEIVE_TODOS: 'RECEIVE_TODOS',
    SET_TODOS:'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_ITEM: 'DELETE_ITEM',
    ADD_ITEM_LOAD:'ADD_ITEM_LOAD',
    REQUEST_DELETE_TODO:'REQUEST_DELETE_TODO'
}

function requestTodos(){
    return {
        type: todoActionTypes.REQUEST_TODOS,
    }
}
function requestDeleteTodo(payload){
    return {
        type: todoActionTypes.REQUEST_DELETE_TODO,
        payload: payload,
    }
}

function addItemLoad(){
    return {
        type: todoActionTypes.ADD_ITEM_LOAD,
    }
}
const receiveTodos = (payload) => {
    return {
        type: todoActionTypes.RECEIVE_TODOS,
        payload: payload,
    }
}
const deleteItem = (payload) => {
    return {
        type: todoActionTypes.DELETE_ITEM,
        payload: payload
    }
}
export function postTodo() {
    return function (dispatch) {
        dispatch(addItemLoad());
        return fetch(`http://localhost:3004/todos`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveTodos(json))
            )
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



export function deleteOneTodo(id,dataIndex, deleteOption) {
    return function (dispatch) {
        dispatch(requestDeleteTodo(dataIndex));
        console.log(dataIndex,"dataIndex")
        return fetch(`http://localhost:3004/todos/`+id,deleteOption)
            .then(
                response => response.json(),
                error => console.log('An error occurred when delete a todo', error)
            )
            .then(json =>dispatch(deleteItem(dataIndex))
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

