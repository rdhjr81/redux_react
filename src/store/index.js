import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'
const initialState = {
    counter: 0,
    showCounter: false
};
const counterSlice = createSlice({
    name:'counter',
    initialState,
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

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;


