import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter.counter);
  const counter1 = useSelector((state) => state.counter1.counter1)
  const dispatch = useDispatch();
  console.log('Counter:', counter);
  console.log('Counter1:', counter1);

  const Increment = () => {
    dispatch({type: 'INC'});
  }
  const Decrement = () => {
    dispatch({type: 'DEC'});
  }
  const AddBy = () => {
    dispatch({type: 'ADD', payload: 10})
  }
  const sliceIncrement = () => {
    dispatch(actions.increment());
  }
  const sliceDecrement = () => {
    dispatch(actions.decrement());
  }
  const sliceAddBy = () => {
    dispatch(actions.addBy(20));
  }

  return (
    <div>

      <h1>Counter App without using createSlice</h1>
      <h2>{counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={AddBy}>Add by 10</button>

      <h1>Counter App by using createSlice</h1>
      <h2>{counter1}</h2>
      <button onClick={sliceIncrement}>Increment</button>
      <button onClick={sliceDecrement}>Decrement</button>
      <button onClick={sliceAddBy}>Add by 20</button>

    </div>
  );
}

export default App;
