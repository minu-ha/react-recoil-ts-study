import { useEffect, useRef, useState } from 'react';
import { IPost } from '../models/IPost';
import PostApi from '../apis/PostApi'

export type DeletePost = (deleteId: number) => void;
export type CreatePost = (title:string) => void;

const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const pk = useRef<number>(101);

  useEffect(() => {
    (async () => {
      const resultPosts = await PostApi.getPosts();
      resultPosts && setPosts(resultPosts);
    })();
  }, []);

  const createPost: CreatePost = title => {
    const [userId, body] = [0, 'body'];
    setPosts([...posts, { id: pk.current++, title, userId, body  }]);
  };

  const deletePost: DeletePost = deleteId => {
    setPosts(posts.filter(({ id }) => id !== deleteId));
  };

  return {
    posts,
    createPost,
    deletePost,
  };
};

export default usePosts;
