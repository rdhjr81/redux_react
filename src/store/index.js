import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    counter: 0,
    showCounter: false
};
createSlice({
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
            state.counter+= action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});
const counterReducer = (
    state = initialState, 
    action) =>{
    if(action.type === 'increment'){
        return {
            ...state, 
            counter: state.counter + 1,
        };
    }

    if(action.type === 'increase'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if(action.type === 'toggle'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }

    return {
        counter: state.counter,
        showCounter: state.showCounter
    };
}
const store = createStore(counterReducer);
export default store;


