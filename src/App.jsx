import './App.css'
import { useDispatch, useSelector } from 'react-redux' 
import { increment, decrement, incrementByAmount, incrementAsync } from './state/counter/counterSlice';
import { fetchTodo } from './state/counter/productSlice';
import { useEffect } from 'react';


function App() {

  const count =  useSelector((state) => state.counter.value);
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  console.log(product);

  return (
    <div>
      <p>hello world</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
