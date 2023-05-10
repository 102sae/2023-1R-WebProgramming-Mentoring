import { Root, Input, TodoCard, TodoWrap } from "./styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

export const DetailsPage = () => {
  const navigate = useNavigate();
  /* detail 페이지로 이동 */
  const onClickMain = () => {
    navigate("/");
  };

  //넘겨 받은 state(id,isChecked)
  const { state } = useLocation();
  //url에서 id, title 가져옴
  const { id, title } = useParams();

  //localStorage에서 todolist 받아옴
  const [todoListData, setTodoListData] = useState(
    JSON.parse(localStorage.getItem("todoListData"))
  );
  const [isChecked, setIsChecked] = useState(state.isChecked);
  //수정, 삭제 icon
  const renderIconXmark = <FontAwesomeIcon icon={faX} />;
  const renderIconChecked = <FontAwesomeIcon icon={faCheck} />;

  const DetailsInput = ({ inputValue }) => {
    return (
      <Input
        type="text"
        defaultValue={inputValue}
        onChange={onEditDetail}
        checked={isChecked}
      />
    );
  };

  const onEditDetail = (e) => {
    if (e.target.value) {
      todoListData[id].title = e.target.value;
      /*local storage 값 수정*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(todoListData));
    }
  };

  /*todolist 삭제 */
  const onClickDelete = () => {
    /*삭제될 id만 빼고 다시 list 만듦*/
    setTodoListData((prevState) => {
      let newTodoListData = prevState.filter((value, index) => id !== index);
      /*local storage에 저장*/
      localStorage.removeItem("todoListData");
      localStorage.setItem("todoListData", JSON.stringify(newTodoListData));
      return newTodoListData;
    });
    onClickMain();
  };

  const useOnClickCheckbox = () => {
    /*새 todo로 수정*/
    setIsChecked((prev) => !prev);
  };

  /*isCheck가 바뀐 후 local storage에 저장 */
  useEffect(() => {
    todoListData[id].isChecked = isChecked;
    /*local storage 값 수정*/
    localStorage.removeItem("todoListData");
    localStorage.setItem("todoListData", JSON.stringify(todoListData));
  }, [isChecked]);

  return (
    <Root>
      <TodoCard>
        <TodoWrap>
          <input
            className="todo_checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={useOnClickCheckbox}
          />

          <DetailsInput inputValue={title} />

          <span className="icon_button" onClick={onClickMain}>
            {renderIconChecked}
          </span>
          <span> </span>
          <span className="icon_button" onClick={onClickDelete}>
            {renderIconXmark}
          </span>
        </TodoWrap>
      </TodoCard>
    </Root>
  );
};
