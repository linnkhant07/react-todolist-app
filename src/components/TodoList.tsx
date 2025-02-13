import TodoCard from "./TodoCard";

interface ToDoListProps {
  todos: string[];
  handleEditTodos: (index: number, newTodo: string) => void;
  handleDeleteTodos: (index: number) => void;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
}

export default function TodoList(props: ToDoListProps) {
  let {
    todos,
    handleEditTodos,
    handleDeleteTodos,
    editingIndex,
    setEditingIndex,
  } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleDeleteTodos={handleDeleteTodos}
            handleEditTodos={handleEditTodos}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
            todo={todo}
            todoIndex={todoIndex}
            key={todoIndex}
          ></TodoCard>
        );
      })}
    </ul>
  );
}
