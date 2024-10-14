import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>Counter: { count }</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
