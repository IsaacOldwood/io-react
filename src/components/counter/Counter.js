import { useState } from "react";
import "./Counter.css";

function PlusButton({ onClickHandler }) {
  return (
    <button className="counter" id="counter-plus-button" onClick={onClickHandler}>
      +
    </button>
  );
}

function MinusButton({ onClickHandler }) {
  return (
    <button className="counter" id="counter-minus-button" onClick={onClickHandler}>
      -
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
      <MinusButton onClickHandler={decreaseCount} />
      <PlusButton onClickHandler={increaseCount} />
    </div>
  );
}

export default Counter;
