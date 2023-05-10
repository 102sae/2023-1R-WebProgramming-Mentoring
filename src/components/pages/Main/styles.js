import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #748fa6;
`;

export const TodoHeader = styled.div`
  margin-bottom: 20px;
  margin-left: 10px;
  color: white;
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  text-shadow: 3px 2px 2px #a3c4bc;
`;

export const TodoCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 50px -13px #a3c4bc;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
`;
