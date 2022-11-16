import {createSlice} from '@reduxjs/toolkit'
const initialCounterState = {
    counter: 0,
    showCounter: false
};
const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{  //methods 
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter+= action.payload;

        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;