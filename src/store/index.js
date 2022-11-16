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
            state.counter+= action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
});

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//         auth: authSlice.reducer
//     }
// });
export default store;


