import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../models/Path'

const Index = () => {
  return (
    <div>
      <Link to={Path.TODO}>TodoList Page</Link>
    </div>
  );
};

export default Index;

/*
  오늘 배운거
  1. TS에서 컴포넌트 Props 정의
  2. models 하위에 인터페이스 및 이넘 정의
  3. API 레이어 분리
    - 분리하는 이유는 추후 엔드포인트등이 변경되었을때 여러곳에서 호출하고있으면 수정할 부분이 많아지기때문
  4. 훅이나 모듈을 만들때 사용하는곳에서 타입 정보를 알 수 있도록 타입을 정의해서 내보내주기
    - 사용처에서 타입을 직접 정의하는 경우가 가장 안좋은 경우
    - 꼭 만든놈이 타입을 같이 정의해서 내보내주거나 추론할 수 있도록 코드를 짜야함
  5. 여러곳에서 똑같은 값을 사용하면 enum 으로 분리하기
    - enum으로 분리 할 경우 오타 등으로 발생하는 에러에 대하여 유리하며 여러곳에서 수정이 필요할시 enum만 수정하면 됨


  다음 과제
  modal 구현해오기
*/
