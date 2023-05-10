import { useNavigate } from "react-router-dom";
import { TodoWrap, TodoInput, IconButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX, faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({
  title,
  isChecked,
  isEdit,
  todoId,
  onClickDelete,
  onClickCheckbox,
  onChangeTodo,
  onChangeUpdateInput,
  onToggleEdit,
}) => {
  /*fontAwesome icon */
  const renderIconChecked = <FontAwesomeIcon icon={faCheck} />;
  const renderIconPencil = <FontAwesomeIcon icon={faPencil} />;
  const renderIconXmark = <FontAwesomeIcon icon={faX} />;

  const navigate = useNavigate();
  /* detail 페이지로 이동 */
  const onClickDetail = () => {
    navigate(`/details/${todoId}/${title}`, {
      /*detail에 toggle을 넘겨줌*/
      state: {
        isChecked: isChecked,
      },
    });
  };

  return (
    <TodoWrap>
      <input type="checkbox" checked={isChecked} onChange={onClickCheckbox} />
      <TodoInput
        checked={isChecked}
        className={isChecked ? "toggle todo_input" : "todo_input"}
        readOnly={isEdit ? false : true}
        defaultValue={title}
        onClick={isEdit ? function () {} : onClickDetail}
        onChange={onChangeUpdateInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onChangeTodo();
          }
        }}
      ></TodoInput>

      <IconButton onClick={onToggleEdit}>
        {isEdit ? renderIconChecked : renderIconPencil}
      </IconButton>
      <IconButton onClick={onClickDelete}>{renderIconXmark}</IconButton>
    </TodoWrap>
  );
};

export default TodoItem;
