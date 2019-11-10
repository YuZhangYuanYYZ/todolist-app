import { actionTypes } from './actions/actions';
import { todoActionTypes } from './actions';

const initialState = {
    todos: [],
    isFetchingTodos: true,
    filter: "SHOW_ALL",
    showSideBar:false,
    showSideBarGetTodoid:0

}
function reducer(originState = initialState, { type, payload }) {
    switch (type) {
        case todoActionTypes.REQUEST_TODOS:
        return {
            ...originState,
            isFetchingTodos: true,
            todos: payload
        };

        case todoActionTypes.RECEIVE_TODOS:
            return {
                ...originState,
                isFetchingTodos: false,
                todos: payload
        }
            
        case actionTypes.SAVE_DATE:
                let saveDateInTodos = originState.todos.map((todo, index) => {
                    if (todo.id === payload.id) {
    
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
        case actionTypes.SHOW_SIDEBAR_TOGLE:
                    return {
                        ...originState,
                        showSideBar:!originState.showSideBar,
                        showSideBarGetTodoid:payload
                    };
                    
        case actionTypes.HIDE_SIDE_BAR:
                    return {
                                ...originState,
                                showSideBar:false,
                                
                            };
        case todoActionTypes.SET_TODOS:
            return{
                ...originState,
                todos:payload
            }

        case todoActionTypes.ADD_TODO:
            return {
                ...originState,
                todos: [
                    ...originState.todos,
                    payload
                ]
            };
        case todoActionTypes.DELETE_ITEM:
            let resultTodos = originState.todos.filter((todo, index) => index !== payload);
            return {
                ...originState,
                todos: resultTodos
            };
        case actionTypes.COMPLETE_TOGGLE:
            let mapResultTodos = originState.todos.map((todo, index) => {
                if (todo.id === payload.id) {

                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                ...originState,
                todos: mapResultTodos
            };
            
            case actionTypes.FAVORATE_TOGGLE:
                let favorateResultTodos = originState.todos.map((todo, index) => {
                    if (todo.id === payload.id) {
    
                        todo.favorate = !todo.favorate;
                    }
                    return todo;
                });
                return {
                    ...originState,
                    todos: favorateResultTodos
                };
        default:
            return originState
    }
};
export default reducer;