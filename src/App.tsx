import "./App.css";
import { RootState } from "./redux/store";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

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
