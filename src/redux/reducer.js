import { ADD_TODO, DELETE_ITEM, COMPLETE_TOGGLE, } from './actions';
const initialState = {
    todos: [],
}
function reducer(originState = initialState, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return {
                ...originState,
                todos: [
                    ...originState.todos,
                    {
                        text: payload,
                        completed: false
                    }
                ]
            };
        case DELETE_ITEM: //let todoTargetIndex = payload;
            let resultTodos = originState.todos.filter((todo, index) => index !== payload);
            return {
                todos: resultTodos
            };
        case COMPLETE_TOGGLE:
            let mapResultTodos = originState.todos.map((todo, index) => {
                if (index === payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                todos: mapResultTodos
            };


        default:
            return originState
    }
};
export default reducer;