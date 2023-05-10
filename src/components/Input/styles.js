import styled from "styled-components";

export const Root = styled.div`
  position: relative;
`;

export const InputWrap = styled.div`
  padding: 6px 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TodoInput = styled.input`
  width: 240px;
  height: 25px;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid #748fa6;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 0px;
  color: white;
  background-color: #748fa6;
  cursor: pointer;
`;
