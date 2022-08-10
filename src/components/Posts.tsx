import React, { FC } from 'react';
import * as $ from './Posts.styled';
import { DeletePost } from '../hooks/usePosts'
import { IPost } from '../models/IPost';

interface PostProps {
  id: number;
  title: string;
  deletePost: DeletePost
}

const Post: FC<PostProps> = props => {
  const { id, title, deletePost } = props;
  return (
    <$.Post>
      {title}
      <$.YellowButton
        onClick={() => void deletePost(id)}
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
