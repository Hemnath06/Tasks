import { create, create1 } from "./user";
import {all} from "redux-saga/effects";

export function* rootSaga(){
    console.log("root saga is running")
     yield all([create(),create1()])
}