import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-yellow-400">
          Tailwind Project is Ready!
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
