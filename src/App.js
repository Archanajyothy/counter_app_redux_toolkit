import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./toolkit/reducer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Redux Toolkit</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
