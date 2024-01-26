import "./TodoEditor.css";
import { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../App";
const TodoEditor = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const { onCreate } = useContext(TodoDispatchContext);

  const onChangeInput = (e) => {
    let newTodo = e.target.value;
    setContent(newTodo);
  };

  const onClickButton = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickButton();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 입력하기 ✏️</h4>
      <div className="editorWrapper">
        <input
          ref={inputRef}
          type="text"
          placeholder="새로운 Todo..."
          onChange={onChangeInput}
          value={content}
          onKeyDown={onKeyDown}
        />
        <button onClick={onClickButton} type="button">
          등록
        </button>
      </div>
    </div>
  );
};
export default TodoEditor;
