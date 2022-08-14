import React from "react";
import * as $ from "../../style/Todo.styled";
import { GiWireCoil } from "react-icons/gi";

const TodoTItle = (): JSX.Element => {
  return (
    <$.TodoTitle>
      <GiWireCoil />
      <p>todolist</p>
    </$.TodoTitle>
  );
};

export default TodoTItle;
