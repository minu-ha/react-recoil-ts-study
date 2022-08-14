import React from "react";
import { useRecoilState } from "recoil";
import { ITodoTypes, todoState } from "../../recoil/todoStudy";
import * as $ from "../../style/Todo.styled";

const TodoList = (): JSX.Element => {
  const [todo, setTodo] = useRecoilState<ITodoTypes[]>(todoState);

  const onComplete = useCallback(
    (id: number): void => {
      setTodo(
        todo.map((todo: ITodoTypes) => {
          // 매개변수로 받은 id와 같은 객체만 완료상태 업데이트
          return todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        })
      );
    },
    [setTodo, todo]
  );

  const onDelete = useCallback(
    (id: number) => {
      // 매개변수로 받은 id와 동일하지 않는 객체들만 필터링
      setTodo(todo.filter((todo: ITodoTypes) => todo.id !== id));
    },
    [setTodo, todo]
  );

  return (
    <$.TodoList>
      {todo.length > 0 ? (
        todo.map((todo: ITodoTypes) => {
          const { id, contents, isCompleted } = todo;

          return (
            <$.TodoItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              onComplete={onComplete}
              onDelete={onDelete}
              todo={todo}
              setTodo={setTodo}
            />
          );
        })
      ) : (
        <div className="TodoList-NoList">
          Todo가 없습니다. 자유롭게 추가해보세요!
        </div>
      )}
    </$.TodoList>
  );
};

export default TodoList;
