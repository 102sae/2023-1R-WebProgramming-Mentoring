import styled from "styled-components";

export const TodoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TodoInput = styled.input`
  width: 215px;
  height: 25px;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid #748fa6;
  padding: 3px 0px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  &:focus {
    outline: none;
  }
`;

export const IconButton = styled.div`
  cursor: pointer;
`;
