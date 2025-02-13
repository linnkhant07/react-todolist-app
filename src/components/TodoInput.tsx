import React, { useState } from "react";

interface ToDoInputProps {
  handleAddTodos: (newTodo: string) => void;
  setEditingIndex: (index: number | null) => void;
}

export default function TodoInput(props: ToDoInputProps) {
  let { handleAddTodos, setEditingIndex } = props;

  //to hold the value from the input
  const [todoValue, setTodoValue] = useState<string>("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="add a new to-do list ..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");

          //in case something an item was being edited
          setEditingIndex(null);
        }}
      >
        Add
      </button>
    </header>
  );
}
