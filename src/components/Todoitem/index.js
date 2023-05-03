import { useNavigate } from "react-router-dom";
import "./index.css";
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

  const moveDetail = useNavigate();
  /* detail 페이지로 이동 */
  const onClickDetail = () => {
    moveDetail("/details", {
      /*detail을 볼 id와 toggle을 넘겨줌*/
      state: {
        id: todoId,
        isChecked: isChecked,
      },
    });
  };

  return (
    <div className="todo_root">
      <div className="todo_wrap">
        <input
          className="todo_checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={onClickCheckbox}
        />

        <input
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
        />

        <span className="icon_button" onClick={onToggleEdit}>
          {isEdit ? renderIconChecked : renderIconPencil}
        </span>
        <span className="icon_button" onClick={onClickDelete}>
          {renderIconXmark}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
