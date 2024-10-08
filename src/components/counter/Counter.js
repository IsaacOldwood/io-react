import { useState } from "react";
import "./Counter.css";

function CounterButton({ onClickHandler, text }) {
  return (
    <button className="counter" onClick={onClickHandler}>
      {text}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>Current count: {count}</div>
      <CounterButton text="-" onClickHandler={decreaseCount} />
      <CounterButton text="+" onClickHandler={increaseCount} />
    </div>
  );
}

export default Counter;
