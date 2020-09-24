import {createStore} from "redux";
import {reducer} from "./Reducers/reducer";


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


window.store = store

export default store