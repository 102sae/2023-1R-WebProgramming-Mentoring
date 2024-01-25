import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSerachResult = () => {
    return search === ""
      ? todos
      : todos.filter((todo) =>
          todo.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h3>Todo List 🌱</h3>
      <input
        className="searchbar"
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요 🔍"
      />
      <div className="listWrapper">
        {getSerachResult().map((todo) => (
          <TodoItem
            onUpdate={onUpdate}
            onDelete={onDelete}
            key={todo.id}
            {...todo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
