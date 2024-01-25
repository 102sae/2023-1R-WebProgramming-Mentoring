import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const analyzeTodo = useMemo(() => {
    console.log("함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const undoneCount = totalCount - doneCount;
    return { totalCount, doneCount, undoneCount };
  }, [todos]);

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

  const { totalCount, doneCount, undoneCount } = analyzeTodo;

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
        <div>
          <div className="analyze">
            총: {totalCount}개 / 완료: {doneCount}개 / 미완료: {undoneCount}개
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
