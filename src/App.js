import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        type="number"
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
        value={input}
      />
      <button onClick={() => dispatch(increment())}>
        <span>+</span>
      </button>
      <span> </span>
      <button onClick={() => dispatch(decrement())}>
        <span>-</span>
      </button>
      <span> </span>
      <button onClick={() => dispatch(incrementByAmount(input))}>
        <span>add</span>
      </button>
    </div>
  );
}

export default App;
