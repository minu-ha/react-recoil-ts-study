import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { IPost } from '../models/IPost';

const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const pk = useRef<number>(101);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    })();
  }, []);

  const createPost = ({ userId, title, body }: IPost) => {
    setPosts([...posts, { id: pk.current++, userId, title, body }]);
  };

  const deletePost = (deleteId: number) => {
    setPosts(posts.filter(({ id }) => id !== deleteId));
  };

  return {
    posts,
    createPost,
    deletePost,
  };
};

export default usePosts;
