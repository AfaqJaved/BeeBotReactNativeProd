import { CounterAction, DECREMENT, INCREMENT } from "../Actions";

// Define the counter state interface
export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};



const counterReducer = (state = initialState, action: CounterAction) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;