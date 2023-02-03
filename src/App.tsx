import "./App.css";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  return (
    <Wrapper className="App">
      <h1>count: {count}</h1>
      <Input
        type="number"
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
        value={input === 0 ? "" : input}
      />
      <Spacer />
      <Button
        onClick={() => dispatch(incrementByAmount(input))}
        disabled={input === 0}
      >
        <span>add</span>
      </Button>
      <Spacer />
      <IncrementButton onClick={() => dispatch(increment())}>
        <span> + </span>
      </IncrementButton>
      <Spacer />
      <DecrementButton onClick={() => dispatch(decrement())}>
        <span> - </span>
      </DecrementButton>
      <Spacer />
      <ResetButton onClick={() => dispatch(reset())}>
        <span>reset</span>
      </ResetButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;
const Input = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 8px 0;
  outline: none;
  padding: 12px 20px;
  transition: all 0.5s;
  &:focus {
    border: 1px solid #555;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const IncrementButton = styled(Button)`
  background-color: red;
`;

const DecrementButton = styled(Button)`
  background-color: blue;
`;
const ResetButton = styled(Button)`
  background-color: #555;
`;

const Spacer = styled.span`
  margin: 0 3px;
`;

export default App;
