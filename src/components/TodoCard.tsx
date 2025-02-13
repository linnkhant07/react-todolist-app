import React, { useState } from "react";

interface TodoCardProps {
  handleEditTodos: (index: number, newTodo: string) => void;
  handleDeleteTodos: (index: number) => void;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
  todo: string;
  todoIndex: number;
}

export default function TodoCard(props: TodoCardProps) {
  const {
    handleEditTodos,
    todo,
    handleDeleteTodos,
    todoIndex,
    editingIndex,
    setEditingIndex,
  } = props;

  const [editValue, setEditValue] = useState<string>(todo);

  return (
    <li className="todoItem">
      {editingIndex === todoIndex ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
          <div className="actionsContainer">
            <button onClick={() => handleEditTodos(todoIndex, editValue)}>
              Save
            </button>
            <button
              onClick={() => {
                setEditValue(todo);
                setEditingIndex(null);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{todo}</p>
          <div className="actionsContainer">
            <button
              onClick={() => {
                setEditingIndex(todoIndex);
              }}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => {
                handleDeleteTodos(todoIndex);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}
