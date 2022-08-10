import React from 'react';
import Posts from '../components/Posts';
import usePosts from '../hooks/usePosts';
import { PostForm } from '../components/PostForm';
import { IPost } from '../models/IPost';

const Todo = () => {
  const {
    posts,
    deletePost,
    createPost,
  }: {
    posts: IPost[];
    deletePost: (deleteId: number) => void;
    createPost: ({ userId, title, body }: IPost) => void;
  } = usePosts();

  return (
    <div>
      <Posts posts={posts} deletePost={deletePost} />
      <PostForm createPost={createPost} />
    </div>
  );
};

export default Todo;

/*
  오늘 배운거중 외울거
  1. 컴포넌트 나누는법 (파일 나누는법)
  2. hooks 만들기 (hooks이 유틸과 클래스와 다른점은 리액트의 라이프사이클 활용이 가능하다)
  3. 컨테이너 패턴 이해
  4. 자바스크립트 배열 내장함수 공부하기 특히 forEach map filter every some find

 다음
 recoil
 리코일 스토어를 만들어보기
 redux => mobx => recoil

 과제
 1. 네이밍 수정한거 한번씩 보고 공부하기
 2. useRef 공부하기
 3. hooks 개념 공부하기
 4. 스토어 개념 공부하기
 5. recoil 대충 가이드 보고 배워서 Posts 데이터를 스토어에 올려보기
*/
