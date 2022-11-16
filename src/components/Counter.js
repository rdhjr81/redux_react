// import { Component } from 'react';
// import {useSelector, useDispatch, connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); //pass a func to redux which will determine which 'piece' of data we will extract from the store
  const showCounter = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
