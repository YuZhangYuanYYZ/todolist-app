
const initialState = {
    todos: [],
    completes: []
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
        case "DELETE_TODO":
            let targetIndex = payload;

            let resultTodos = originState.todos.filter((todo, index) => index !== targetIndex);

            return {
                ...originState,
                todos: resultTodos
            }

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

// state = {
//     todos: [{ text: "finish reading", completed: false }, { text: "eat lunch", completed: false }],
// }
// store.subscribe(() => {
//     console.log("store has got new data, you can setState now", store.getState());
// })

// store.subscribe(() => {
//     console.log("store has get data, you can setState now");
// })

export default store;
// // currentListeners = [() => {
// //     console.log("store has got new data, you can setState now");
// // },
// // () => {
// //     console.log("store has get data, you can setState now");
// // }

// //]
// store.dispatch({ type: "ADD_TODO", payload: "eat lunch" });

