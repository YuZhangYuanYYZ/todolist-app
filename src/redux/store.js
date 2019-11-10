import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      ),
);
export default store;
