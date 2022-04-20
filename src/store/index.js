import { configureStore, createSlice } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {

    if(action.type === 'INC'){
        return { counter: state.counter + 1 };
    }else if(action.type === 'DEC'){
        return { counter: state.counter - 1 };
    }else if(action.type === 'ADD'){
        return { counter: state.counter + action.payload }
    }

    return state;
}

const counterSlice = createSlice({
    name: 'counter1',
    initialState: { counter1: 0},
    reducers: {
        increment(state, action){
            state.counter1++;
        },
        decrement(state, action){
            state.counter1--;
        },
        addBy(state, action){
            state.counter1 += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter:reducerFn,
        counter1:counterSlice.reducer
    }
});

export default store;
