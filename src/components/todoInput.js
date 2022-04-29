import React, { UseState } from "react";
import {useDispatch } from "react-redux";
import "./todoInput.css";

const todoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = UseState();
  const handleChange = (e) => setNewTodo(e.target.value);
  const handleclick = () =>
    dispatch({
      type: "ADD_TODO",
      
      payload: {
        label: newTodo,
        id: Math.cell(Math.random() * 100), 
      },
    });
  return (
    <>
      <div className="input">
        <input value={newTodo} onChange={handleChange} type="text" />
        <button onclick={handleclick}> ADD! </button>
      </div>
    </>
  );
};

export default todoInput;
