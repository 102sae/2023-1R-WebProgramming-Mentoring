import "./index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onChangeInput, inputValue, onAddTodo }) => {
  const renderIconPlus = <FontAwesomeIcon icon={faPlus} />;
  return (
    <div className="input_root">
      <div className="input_wrap">
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          className="todo_input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddTodo();
            }
          }}
        />
        <button className="button_add" onClick={onAddTodo}>
          {renderIconPlus}
        </button>
      </div>
    </div>
  );
};

export default Input;
