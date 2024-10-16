import "./Calculator.css";
import { useState } from "react";

function NumberBox({ onChangeHandler }) {
  return <input className="number-box" type="number" onChange={(e) => onChangeHandler(e.target.value)} />;
}

function OperatorBox({ onChangeHandler, operator }) {
  const operators = ["+", "-", "*", "/"];
  const operatorElements = operators.map((op) => (
    <input
      key={op}
      className={"operator-box" + (operator === op ? " selected" : "")}
      type="button"
      value={op}
      onClick={(e) => onChangeHandler(e.target.value)}
    />
  ));

  return (
    <>
      {operatorElements}
    </>
  );
}

function CalculateButton({ onClickHandler }) {
  return (
    <button className="calculate-button" onClick={onClickHandler}>
      Calculate
    </button>
  );
}

function CalculationOutput({ result }) {
  return <p className="calculation-output">Result: {result}</p>;
}

function Calculator() {
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState("+");
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);

  function calculate() {
    let output = null;
    switch (operator) {
      case "+":
        output = parseFloat(input1) + parseFloat(input2);
        break;
      case "-":
        output = parseFloat(input1) - parseFloat(input2);
        break;
      case "/":
        output = parseFloat(input1) / parseFloat(input2);
        break;
      case "*":
        output = parseFloat(input1) * parseFloat(input2);
        break;
      default:
        break;
    }

    setResult(output);
  }

  return (
    <div>
      <h2>Calculator</h2>
      <NumberBox onChangeHandler={setInput1} />
      <OperatorBox operator={operator} onChangeHandler={setOperator} />
      <NumberBox onChangeHandler={setInput2} />
      <CalculateButton onClickHandler={calculate} />
      <CalculationOutput result={result} />
    </div>
  );
}

export default Calculator;
