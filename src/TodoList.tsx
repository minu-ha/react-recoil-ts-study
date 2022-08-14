import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  const { register } = useForm();

  return (
    <div>
      <form>
        <input placeholder="write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
