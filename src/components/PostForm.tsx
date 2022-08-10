import React, { FC, useState } from 'react';
import { CreatePost } from '../hooks/usePosts'

interface PostFormProps {
  createPost: CreatePost;
}

const PostForm: FC<PostFormProps> = props => {
  const { createPost } = props;
  const [title, setTitle] = useState('');

  const onChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => void setTitle(value);
  const onClickHandler = () => {
    createPost(title);
    setTitle('');
  }

  return (
    <>
      <input
        value={title}
        onChange={onChangeHandler}
      />
      <button
        onClick={onClickHandler}
      >
        등록
      </button>
    </>
  );
}

export default PostForm;
