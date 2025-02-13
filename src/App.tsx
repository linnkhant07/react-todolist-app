import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  function persistData(newList: string[]) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  const handleAddTodos = (newTodo: string) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    persistData(newTodos);
  };

  const handleDeleteTodos = (index: number) => {
    //filter will keep the true ones
    const newTodos: string[] = todos.filter((_, todosIndex) => {
      return index !== todosIndex;
      //will keep the ones where todosIndex isnt the same
    });
    setTodos(newTodos);
    persistData(newTodos);
  };

  //editing is a little bit complicated
  //this is for tracking whether an edit button has been clicked and on which item
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  //now to handle actual editing
  const handleEditTodos = (index: number, newTodo: string) => {
    const newTodos = todos.map((todo, todoIndex) => {
      return todoIndex === index ? newTodo : todo;
      //replace it with new text for the item we edited
    });
    setTodos(newTodos);
    persistData(newTodos);
    setEditingIndex(null);
    //signal we're done editing
  };

  //dependency array is empty means that it will occur when the page loads
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos: string | null = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    let localTodosObj: string[] = JSON.parse(localTodos).todos;
    console.log("local todos are ", localTodos);
    setTodos(localTodosObj);
  }, []);

  return (
    <>
      <>
        <TodoInput
          handleAddTodos={handleAddTodos}
          setEditingIndex={setEditingIndex}
        ></TodoInput>
        <TodoList
          todos={todos}
          handleDeleteTodos={handleDeleteTodos}
          handleEditTodos={handleEditTodos}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
        ></TodoList>
      </>
    </>
  );
}

export default App;
