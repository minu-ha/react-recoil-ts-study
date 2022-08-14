import Posts from "../components/Posts";
import usePosts from "../hooks/usePosts";
import PostForm from "../components/PostForm";

const Todo = () => {
  const { posts, deletePost, createPost } = usePosts();

  return (
    <div>
      <Posts posts={posts} deletePost={deletePost} />
      <PostForm createPost={createPost} />
    </div>
  );
};

export default Todo;
