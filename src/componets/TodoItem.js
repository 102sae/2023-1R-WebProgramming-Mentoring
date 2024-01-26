import "./TodoItem.css";
import React from "react";
import { TodoContext } from "../App";

const TodoItem = ({ id, content, isDone, createDate }) => {
  const { onUpdate, onDelete } = React.useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  console.log(id + "TodoItem");
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkboxCol">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="titleCol">{content}</div>
      <div className="dateCol">{new Date(createDate).toLocaleDateString()}</div>
      <div className="btnCol">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
