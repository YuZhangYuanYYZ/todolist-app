
const initialState = {
    todos: [{ text: "finish reading", completed: false }],
}

let state = initialState;

const reducer = (originState, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
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
        default:
            return originState
    }
};

const store = {
    getState: () => {
        return state;
    },

    dispatch: ({ type, payload }) => {
        state = reducer(state, { type, payload })
    },
    subscribe: () => {

    }
}

store.dispatch({ type: "ADD_TODO", payload: "eat lunch" });

