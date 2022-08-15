import React from "react";
import { IToDo, toDoSelector, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const ToDo = ({ text, category }: IToDo) => {
  const onClick = (newCategory: IToDo["category"]) => {};
  const setToDos = useSetRecoilState(toDoState);
  const selectorOutput = useRecoilValue(toDoSelector);
  return (
    <li>
      {text}
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>TODO</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>DONE</button>
      )}
    </li>
  );
};

export default ToDo;
