import { Store, combineReducers, createStore } from "redux";
import counterReducer, { CounterState } from "./reducers/CountReducer";
import bleStateReducer, { BleState } from "./reducers/BleReducer";


export interface RootReducer {
    countReducer : CounterState,
    bleReducer : BleState
}


const rootReducer = combineReducers<RootReducer>({
    countReducer : counterReducer,
    bleReducer : bleStateReducer
});


const store : Store<RootReducer> = createStore(rootReducer);


export default store;