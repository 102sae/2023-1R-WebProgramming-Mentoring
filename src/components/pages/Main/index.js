import { useEffect, useState } from "react";
import "./index.css";
import Input from "../../../components/Input/";
import TodoItem from "../../../components/TodoItem/";

let count = 0;
if (localStorage.getItem("count") !== null) {
  count = parseInt(localStorage.getItem("count"));
} else {
  localStorage.setItem("count", count);
}

const MainPage = () => {
  const [todoListData, setTodoListData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [updateInputValue, setUpdateInputValue] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const localTodoListData = JSON.parse(localStorage.getItem("todoListData"));

  /*detail page로 갔다와도 todoListData 유지 */
  useEffect(() => {
    setTodoListData(localTodoListData);
  }, []);

  /*체크 박스를 클릭하면 isChecked 상태 변화*/
  const onClickCheckbox = (id) => () => {
    setIsChecked((prev) => !prev);
    /*checkbox check 여부 수정*/
    todoListData[id].isChecked = isChecked;
    setTodoListData(todoListData);
    /*local storage 값 수정*/
    localStorage.removeItem("todoListData");
    localStorage.setItem("todoListData", JSON.stringify(todoListData));
  };

  /*Edit 여부 변경*/
  const onToggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  /*inputValue 수정*/
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  /*todolist 생성 */
  const onAddTodo = () => {
    if (inputValue) {
      /*local storage에 값이 있으면 */
      if (todoListData !== null) {
        setTodoListData((prevState) => {
          let newTodoListData = prevState.concat([
            { id: count, title: inputValue, isChecked: false },
          ]);
          setInputValue("");
          /*local storage에 저장*/
          localStorage.removeItem("todoListData");
          localStorage.setItem("todoListData", JSON.stringify(newTodoListData));
          return newTodoListData;
        });
      } else {
        /*local storage에 값이 없으면 */
        setTodoListData(() => {
          let newTodoListData = [].concat([
            { id: count, title: inputValue, isChecked: false },
          ]);
          setInputValue("");
          /*local storage에 저장*/
          localStorage.removeItem("todoListData");
          localStorage.setItem("todoListData", JSON.stringify(newTodoListData));
          return newTodoListData;
        });
      }
      count += 1;
      /*local storage의 count 값 수정 */
      localStorage.removeItem("count");
      localStorage.setItem("count", JSON.stringify(count));
    }
  };

  /*수정된 inputValue 수정*/
  const onChangeUpdateInput = (e) => {
    setUpdateInputValue(e.target.value);
  };

  /*todolist 수정 */
  const onChangeTodo = (id) => () => {
    if (updateInputValue) {
      /*새 todo로 수정*/
      todoListData[id].title = updateInputValue;
      setTodoListData(todoListData);
      /*local storage 값 수정*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(todoListData));
      /*enter key로 수정했을 경우 edit 상태 변경*/
      onToggleEdit();
    }
  };

  /*todolist 삭제 */
  const onClickDelete = (id) => () => {
    /*삭제될 id만 빼고 다시 list 만듦*/
    setTodoListData((prevState) => {
      let newTodoListData = prevState.filter((value, index) => id !== index);
      setInputValue("");
      /*local storage에 저장*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(newTodoListData));
      return newTodoListData;
    });
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

        {/*local storage에 todo가 없으면 mapping 하지 않음 */}
        {localTodoListData !== null
          ? localTodoListData.map((todoItemData, index) => (
              <TodoItem
                {...todoItemData}
                isEdit={isEdit}
                todoId={index}
                onClickDelete={onClickDelete(index)}
                onClickCheckbox={onClickCheckbox(index)}
                onChangeTodo={onChangeTodo(index)}
                onChangeUpdateInput={onChangeUpdateInput}
                onToggleEdit={onToggleEdit}
                key={`todo_item_${todoItemData.id}`}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MainPage;
