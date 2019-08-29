export const ADD_TODO = 'ADD_TODO'
export const DELETE_ITEM = 'DELETE_ITEM'
export const COMPLETE_TOGGLE = 'COMPLETE_TOGGLE'
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
};
export const completeToggle = (payload) => {
    return {
        type: "COMPLETE_TOGGLE",
        payload: payload
    }
};
export const deleteTodo = (payload) => {
    return {
        type: "DELETE_ITEM",
        payload: payload
    }
}