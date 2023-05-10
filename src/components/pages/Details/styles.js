import styled from "styled-components";

/*const styleFlexColumnCenter = `
    display: flex;
    flex-directionL column;
    align-item: center;
`;

export const Root = styled.div`
  ${styleFlexColumnCenter}
`;
*/

export const Input = styled.input`
  width: 230px;
  height: 25px;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid #748fa6;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  &:focus {
    outline: none;
  }
`;

export const TodoWrap = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const TodoCard = styled.div`
  width: 95vw;
  height: 95vw;
  background-color: white;
  border: 3px solid #748fa6;
  margin: 20px 0px;
  padding: 15px 5px;
`;

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
