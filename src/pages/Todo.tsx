import React from 'react';
import Posts from '../components/Posts';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import Modal from '../components/Modal'
import ModalStore from '../stores/ModalStore'
import { observer } from 'mobx-react'

const Todo = () => {
  const {
    posts,
    deletePost,
    createPost,
  } = usePosts();

  const { isVisible } = ModalStore

  return (
    <div>
      <Posts posts={posts} deletePost={deletePost} />
      <PostForm createPost={createPost} />
      {isVisible && <Modal />}
    </div>
  );
};

export default observer(Todo);