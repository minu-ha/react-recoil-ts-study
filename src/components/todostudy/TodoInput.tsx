import React from "react";
import * as $ from "../../style/Todo.styled";
import { FaPen } from "react-icons/fa";

const TodoInput = (): JSX.Element => {
  return (
    <$.TodoInput>
      <$.input type="text" placeholder="write todo" />
      <FaPen onClick={addTodo} />
    </$.TodoInput>
  );
};

export default TodoInput;
