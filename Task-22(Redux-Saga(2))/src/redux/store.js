import { applyMiddleware, createStore } from "redux"
import { reduce, root } from "./reduce";
import reduxSaga from "redux-saga";
import { rootSaga } from "../Sagas";

export const getStore=()=>{
    const a = reduxSaga();
    const store = createStore(root,applyMiddleware(a));
    a.run(rootSaga);
    return store;
}