import { actionTypes } from './actions';
const initialState = {
    todos: [],
}
function reducer(originState = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.ADD_TODO:
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
        case actionTypes.DELETE_ITEM: //let todoTargetIndex = payload;
            let resultTodos = originState.todos.filter((todo, index) => index !== payload);
            return {
                todos: resultTodos
            };
        case actionTypes.COMPLETE_TOGGLE:
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