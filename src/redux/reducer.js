import { actionTypes } from './actions';
const initialState = {
    todos: [],
    filter: "SHOW_ALL"
}

function reducer(originState = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.RECEIVE_TODOS:
            return {
                ...originState,
                todos: payload
            }
        case actionTypes.SHOW_ALL:
            return {
                ...originState,
                filter: "SHOW_ALL"
            }
        case actionTypes.SHOW_ACTIVE:
            return {
                ...originState,
                filter: "SHOW_ACTIVE"
            }

        case actionTypes.SHOW_COMPLETED:
            return {
                ...originState,
                filter: "SHOW_COMPLETED"
            }

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
        case actionTypes.DELETE_ITEM:
            let resultTodos = originState.todos.filter((todo, index) => index !== payload);
            return {
                ...originState,
                todos: resultTodos
            };
        case actionTypes.COMPLETE_TOGGLE:
            let mapResultTodos = originState.todos.map((todo, index) => {
                console.log(payload, todo, "here index")
                if (index === payload) {

                    todo.completed = !todo.completed;
                }
                return todo;
            });
            //  console.log(mapResultTodos, "here resulttodos")
            return {
                ...originState,
                todos: mapResultTodos
            };


        default:
            return originState
    }
};
export default reducer;