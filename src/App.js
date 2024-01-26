import "./App.css";
import React, { useCallback, useMemo, useReducer, useRef } from "react";
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

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.todo, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const App = () => {
  const [todo, dispatch] = useReducer(reducer, mokTodos);

  const idRef = useRef(2);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      todo: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
    idRef.current++;
  };

  const onUpdate = useCallback((id) => {
    dispatch({ type: "UPDATE", id });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", id });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};
export default App;
