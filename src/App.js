import React from "react";
import "./App.css";
import todoInput from "./components/todoInput";
import todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <div className="app_todoContainer">

          <todos/>
          <todoInput/>
          


        </div>
      </div>
    </div>
  );
}

export default App;
