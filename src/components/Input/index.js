import "./index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onChangeInput, inputValue, onCreateInput }) => {
  const iconPlus = <FontAwesomeIcon icon={faPlus} />;
  return (
    <div className="input_root">
      <div className="input_warp">
        <input
          type="text"
          onChange={onChangeInput}
          defaultValue={inputValue}
          className="todo_input"
        ></input>
        <button className="button_add" onClick={onCreateInput}>
          {iconPlus}
        </button>
      </div>
    </div>
  );
};

export default Input;
