import { createStore } from 'redux'
const initialState = {
    todos: [],
    completes: []
}

function reducer(originState = initialState, { type, payload }) {
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

const store = createStore(reducer);
export default store;

// const store = {
//     getState: () => {
//         return state;
//     },

//     dispatch: ({ type, payload }) => {
//         state = reducer(state, { type, payload })

//         const listeners = currentListeners;
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i]
//             listener()
//         }
//     },

//     subscribe: (listener) => {
//         currentListeners.push(listener)
//         return function unsubscribe() {
//             const index = currentListeners.indexOf(listener)
//             currentListeners.splice(index, 1)
//         }
//     }
// }

// state = {
//     todos: [{ text: "finish reading", completed: false }, { text: "eat lunch", completed: false }],
// }
// store.subscribe(() => {
//     console.log("store has got new data, you can setState now", store.getState());
// })

// store.subscribe(() => {
//     console.log("store has get data, you can setState now");
// })


// // currentListeners = [() => {
// //     console.log("store has got new data, you can setState now");
// // },
// // () => {
// //     console.log("store has get data, you can setState now");
// // }

// //]
// store.dispatch({ type: "ADD_TODO", payload: "eat lunch" });

