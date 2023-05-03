import { Root, InputBox, TodoCard, TodoTitle } from "./styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

export const DetailsPage = () => {
  const moveMain = useNavigate();
  /* detail 페이지로 이동 */
  const onClickMain = () => {
    moveMain("/");
  };

  //넘겨 받은 state(id,isChecked)
  const { state } = useLocation();

  //localStorage에서 todolist 받아옴
  const todoListData = localStorage.getItem("todoListData");

  const [JSONListData, setJSONListData] = useState(JSON.parse(todoListData));
  const [isChecked, setIsChecked] = useState(state.isChecked);

  const renderIconXmark = <FontAwesomeIcon icon={faX} />;
  const renderIconChecked = <FontAwesomeIcon icon={faCheck} />;

  const DetailsInput = ({ inputValue }) => {
    return (
      <InputBox
        type="text"
        defaultValue={inputValue}
        onChange={onEditDetail}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClickMain();
          }
        }}
      />
    );
  };

  const onEditDetail = (e) => {
    if (e.target.value) {
      JSONListData[state.id].title = e.target.value;
      /*local storage 값 수정*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(JSONListData));
    }
  };

  const useOnClickCheckbox = () => {
    /*새 todo로 수정*/
    setIsChecked((prev) => !prev);
  };

  /*isCheck가 바뀐 후 local storage에 저장 */
  useEffect(() => {
    JSONListData[state.id].isChecked = isChecked;
    /*local storage 값 수정*/
    localStorage.removeItem("todoListData");
    localStorage.setItem("todoListData", JSON.stringify(JSONListData));
  }, [isChecked]);

  /*todolist 삭제 */
  const onClickDelete = () => {
    /*삭제될 id만 빼고 다시 list 만듦*/
    setJSONListData((prevState) => {
      let newTodoListData = prevState.filter(
        (value, index) => state.id !== index
      );
      /*local storage에 저장*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(newTodoListData));
      return newTodoListData;
    });
    onClickMain();
  };

  return (
    <Root>
      <TodoTitle>TodoList</TodoTitle>
      <TodoCard>
        <input
          className="todo_checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={useOnClickCheckbox}
        />

        <DetailsInput inputValue={JSONListData[state.id].title} />

        <span className="icon_button" onClick={onClickMain}>
          {renderIconChecked}
        </span>
        <span> </span>
        <span className="icon_button" onClick={onClickDelete}>
          {renderIconXmark}
        </span>
      </TodoCard>
    </Root>
  );
};
