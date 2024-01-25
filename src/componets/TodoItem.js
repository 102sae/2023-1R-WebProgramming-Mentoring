import "./TodoItem.css";
import React from "react";
const TodoItem = ({ id, content, isDone, createDate, onUpdate, onDelete }) => {
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
