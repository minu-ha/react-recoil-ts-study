import { FC, useCallback, useState } from "react";
import * as $ from "./Posts.styled";
import { DeletePost } from "../hooks/usePosts";
import { IPost } from "../models/IPost";
import Modal from "./Modal";

interface PostsProps {
  posts: IPost[];
  deletePost: DeletePost;
}

const Posts: FC<PostsProps> = (props) => {
  const { posts, deletePost } = props;

  return (
    <$.Posts>
      {posts.map(({ id, title }) => {
        return (
          <Post
            id={id}
            title={title}
            key={`post-${id}`}
            deletePost={deletePost}
          />
        );
      })}
    </$.Posts>
  );
};

interface PostProps {
  id: number;
  title: string;
  deletePost: DeletePost;
}

const Post: FC<PostProps> = (props) => {
  const { id, title, deletePost } = props;

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <$.Post>
      {title}
      <$.YellowButton onClick={() => void deletePost(id)}>삭제</$.YellowButton>

      {isOpenModal && (
        <Modal
          id={id}
          deletePost={deletePost}
          onClickToggleModal={onClickToggleModal}
        ></Modal>
      )}
      <button onClick={onClickToggleModal}>삭제</button>
    </$.Post>
  );
};

export default Posts;
