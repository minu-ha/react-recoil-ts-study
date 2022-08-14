import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
export const Background = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
`;
export const Dialog = styled.div`
  display: inline-block;
  position: fixed;
  padding: 20px 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  text-align: center;
`;
export const Title = styled.h3``;
export const Contents = styled.p``;
export const Controls = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  margin: 20px 0;
`;
export const Control = styled.li``;
export const Button = styled.button`
  border: 1px solid #000;
  font-weight: bold;
  width: 100px;
  height: 50px;
`;