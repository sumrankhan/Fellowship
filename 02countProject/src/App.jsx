import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Value : {count}</h1>
      <button onClick={addValue} type="button">
        Add Value
      </button>
      &nbsp;
      <button onClick={removeValue} type="button">
        Remove Value
      </button>
    </>
  );
}

export default App;
