import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoContext } from "../App";

const TodoList = () => {
  const { todo } = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const undoneCount = totalCount - doneCount;
    return { totalCount, doneCount, undoneCount };
  }, [todo]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const { totalCount, doneCount, undoneCount } = analyzeTodo;

  TodoList.defaultProps = {
    todos: [],
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
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
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
