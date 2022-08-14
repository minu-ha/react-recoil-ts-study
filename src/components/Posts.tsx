import React, { FC } from 'react';
import * as $ from './Posts.styled';
import { DeletePost } from '../hooks/usePosts'
import { IPost } from '../models/IPost';
import ModalStore from '../stores/ModalStore'

interface PostProps {
  id: number;
  title: string;
  deletePost: DeletePost
}

const Post: FC<PostProps> = props => {
  const { id, title, deletePost } = props;
  const { onVisibleModal, onCloseModal } = ModalStore

  const onDeleteHandler = (postId: number) => {
    onVisibleModal({
      modalTitle: '삭제하시겠습니까?',
      modalContents: '삭제한 글을 되돌릴 수 없습니다',
      onClose: onCloseModal,
      onSubmit: () => {
        deletePost(postId)
        onCloseModal();
      } 
    })
  }

  return (
    <$.Post>
      {title}
      <$.YellowButton
        onClick={() => onDeleteHandler(id)}
      >
        삭제
      </$.YellowButton>
    </$.Post>
  )
}

interface PostsProps {
  posts: IPost[]
  deletePost: DeletePost
}

const Posts: FC<PostsProps> = props => {
  const { posts, deletePost } = props;

  return (
    <$.Posts>
      {posts.map(({ id, title }) => {
        return (
          <Post id={id} title={title} key={`post-${id}`} deletePost={deletePost} />
        );
      })}
    </$.Posts>
  );
}

export default Posts;
