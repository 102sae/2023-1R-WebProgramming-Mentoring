import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX, faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ title, onClickDelete, isEdit, onToggleEdit }) => {
  const [checked, setChecked] = useState(false);

  /*체크 박스를 클릭하면 checked 상태 변화*/
  const onClickCheckbox = () => {
    setChecked((prev) => !prev);
  };

  /*fontAwesome icon */
  const renderIconChecked = <FontAwesomeIcon icon={faCheck} />;
  const renderIconPencil = <FontAwesomeIcon icon={faPencil} />;
  const renderIconXmark = <FontAwesomeIcon icon={faX} />;

  return (
    <div className="todo_root">
      <div className="todo_wrap">
        <input
          className="todo_checkbox"
          type="checkbox"
          checked={checked}
          onChange={onClickCheckbox}
        />

        <input
          className={checked ? "toggle todo_input" : "todo_input"}
          readOnly={isEdit ? false : true}
          defaultValue={title}
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
