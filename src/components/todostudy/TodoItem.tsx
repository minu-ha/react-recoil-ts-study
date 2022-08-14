import React, { useCallback, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { ITodoTypes } from "../../recoil/todoStudy";
import * as $ from "../../style/Todo.styled";

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todo: ITodoTypes[];
  setTodo: SetterOrUpdater<ITodoTypes[]>;
}

const TodoItem = ({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todo,
  setTodo,
}: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }
    setTodo(
      todo.map((todo: ITodoTypes) =>
        todo.id === id ? { ...todo, contents: modifyContents } : todo
      )
    );
  }, [id, modifyContents, setTodo, todo]);

  return (
    <>
      <$.TodoItem>
        <div
          title={contents}
          className={isCompleted ? "TodoItem-Completed" : ""}
          onClick={() => onComplete(id)}
        >
          {contents}
        </div>
        <div className="TodoItem-Icons"></div>
      </$.TodoItem>
    </>
  );
};

export default TodoItem;
