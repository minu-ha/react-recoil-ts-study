import React from "react";
import * as $ from "../style/Todo.styled";
import TodoTItle from "../components/todostudy/TodoTItle";
import TodoList from "../components/todostudy/TodoList";
import TodoInput from "../components/todostudy/TodoInput";

const TodoTemplate = (): JSX.Element => {
  return (
    <$.TodoTemplate>
      <$.contents>
        <TodoTItle />
        <TodoList />
        <TodoInput />
      </$.contents>
    </$.TodoTemplate>
  );
};

export default TodoTemplate;
