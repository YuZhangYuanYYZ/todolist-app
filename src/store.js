
const initialState = {
    todos: [{ text: "finish reading", completed: false }],
}

let state = initialState;
let currentListeners = [];

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

        const listeners = currentListeners;
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener()
        }
    },

    subscribe: (listener) => {
        currentListeners.push(listener)
        return function unsubscribe() {
            const index = currentListeners.indexOf(listener)
            currentListeners.splice(index, 1)
        }
    }
}

store.subscribe(() => {
    console.log("store has got new data, you can setState now");
})
store.dispatch({ type: "ADD_TODO", payload: "eat lunch" });

