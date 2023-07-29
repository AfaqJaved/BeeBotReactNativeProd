import { Store, combineReducers, createStore } from "redux";
import counterReducer, { CounterState } from "./reducers/CountReducer";


export interface RootReducer {
    countReducer : CounterState
}


const rootReducer = combineReducers<RootReducer>({
    countReducer : counterReducer
});


const store : Store<RootReducer> = createStore(rootReducer);


export default store;