import styled from "styled-components";
import Input from "../../Input";
import { DefaultContext } from "react-icons";

/*const styleFlexColumnCenter = `
    display: flex;
    flex-directionL column;
    align-item: center;
`;

export const Root = styled.div`
  ${styleFlexColumnCenter}
`;
*/
export const InputBox = styled.input`
  width: 230px;
  height: 25px;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid #748fa6;
  margin: 20px 0px 0px 2px;
  &:focus {
    outline: none;
  }
`;

export const TodoTitle = styled.span`
  margin-bottom: 20px;
  margin-left: 10px;
  color: white;
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  text-shadow: 3px 2px 2px #748fa6;
`;

export const TodoCard = styled.div`
  width: 290px;
  height: 400px;
  padding: 0px 5px;
  background-color: white;
  box-shadow: 50px -13px #748fa6;
  overflow: auto;
`;

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a3c4bc;
`;
