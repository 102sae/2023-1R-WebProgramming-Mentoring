import { useState } from "react";
import "./index.css";
import Input from "../../../components/Input/";
import TodoItem from "../../../components/TodoItem/";

let count = 0;

const MainPage = () => {
  const [todoListData, setTodoListData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  /*Edit 여부 변경*/
  const onToggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  /*inputValue 갱신*/
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  /*todolist 생성 */
  const onAddTodo = () => {
    if (inputValue) {
      setTodoListData([...todoListData, { id: count, title: inputValue }]);
      setInputValue("");
      count++;
    }
  };

  /*todolist 삭제 */
  const onClickDelete = (id) => () => {
    setTodoListData((prev) => prev.filter((value, index) => id !== index));
  };

  return (
    <div className="body">
      <span className="todo_header">TodoList</span>
      <div className="todo_card">
        <Input
          onAddTodo={onAddTodo}
          onChangeInput={onChangeInput}
          inputValue={inputValue}
        />
        {todoListData.map((todoItemData, index) => (
          <TodoItem
            {...todoItemData}
            isEdit={isEdit}
            onToggleEdit={onToggleEdit}
            onClickDelete={onClickDelete(index)}
            key={`todo_item_${todoItemData.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
