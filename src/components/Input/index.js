import React from "react";
import { Root, InputWrap, TodoInput, AddButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onChangeInput, inputValue, onAddTodo }) => {
  const renderIconPlus = <FontAwesomeIcon icon={faPlus} />;
  return (
    <Root>
      <InputWrap>
        <TodoInput
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddTodo();
            }
          }}
        />
        <AddButton>
          &nbsp;
          {renderIconPlus}
        </AddButton>
      </InputWrap>
    </Root>
  );
};

export default Input;
