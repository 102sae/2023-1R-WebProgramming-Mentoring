import "./App.css";
import { useRef, useState } from "react";
import Header from "./componets/Header";
import TodoEditor from "./componets/TodoEditor";
import TodoList from "./componets/TodoList";

const mokTodos = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "컴포넌트 스타일링 해보기",
    createDate: new Date().getTime(),
  },
];
const App = () => {
  const [todos, setTodos] = useState(mokTodos);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};
export default App;
