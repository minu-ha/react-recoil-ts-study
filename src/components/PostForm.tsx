import { useState } from 'react';
import { IPost } from '../models/IPost';

export const PostForm = ({ createPost }) => {
  const [content, setContent] = useState('');

  const createPostHandler = () => {
    if (content) {
      createPost({
        userId: 1,
        title: content,
        body: '124',
      });
      setContent('');
    }
  };

  return (
    <>
      <input value={content} onChange={(event) => setContent(event.target.value)} />
      <button onClick={createPostHandler} />
    </>
  );
};
