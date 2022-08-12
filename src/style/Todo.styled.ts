import styled from "styled-components";

export const TodoTemplate = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #598259;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
`;

export const contents = styled.div`
  margin: auto;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
`;

export const TodoTitle = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 10px;
`;

export const TodoList = styled.div`
  width: 500px;
  height: 500px;
  max-height: 500px;
  position: relative;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const TodoInput = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 0 4px;
`;

export const input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  color: white;
  background-color: #fff;
  padding: 5px 2px;
  font-size: 1.2rem;
`;

export const TodoItem = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;
`;
