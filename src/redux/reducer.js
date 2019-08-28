import { ADD_TODO } from './actions';
const initialState = {
    todos: [],
    completes: []
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
        case "DELETE_TODO":
            let todoTargetIndex = payload;

            let resultTodos = originState.todos.filter((todo, index) => index !== todoTargetIndex);

            return {
                ...originState,
                todos: resultTodos
            };
        case "DELETE_COMPLETE":
            let completeTargetIndex = payload;
            let resultCompletes = originState.completes.filter((complete, index) => index !== completeTargetIndex);

            return {
                ...originState,
                completes: resultCompletes
            };

        case "ADD_TODO_COMPLETE":
            return {
                ...originState,
                completes: [
                    ...originState.completes, { text: payload, completes: true }

                ]
            };

        case "ADD_COMPLETE_TODO":
            return {
                ...originState,
                todos: [
                    ...originState.todos, { text: payload, completes: false }

                ]
            };

        default:
            return originState
    }
};

export default reducer;