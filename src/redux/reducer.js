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

            
        case actionTypes.SAVE_DATE:
                let saveDateInTodos = originState.todos.map((todo, index) => {
                    if (todo._id === payload.id) {
    
                        todo.dueTime = payload.date;
                    }
                    return todo;
                });

                return {
                    ...originState,
                    todos: saveDateInTodos
                };

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
        case actionTypes.SET_TODOS:
            return{
                ...originState,
                todos:payload
            }

        case actionTypes.ADD_TODO:
            return {
                ...originState,
                todos: [
                    ...originState.todos,
                    payload
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
                if (index === payload) {

                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                ...originState,
                todos: mapResultTodos
            };


        default:
            return originState
    }
};
export default reducer;