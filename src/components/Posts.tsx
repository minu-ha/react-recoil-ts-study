import { FC } from "react";
import * as $ from "./Posts.styled";
import { DeletePost } from "../hooks/usePosts";
import { IPost } from "../models/IPost";
import useModal from "../hooks/useModal";
import { Button } from "@mui/material";

interface PostsProps {
  posts: IPost[];
  deletePost: DeletePost;
}

const Posts: FC<PostsProps> = (props) => {
  const { showModal } = useModal;

  const handleClickAlertModal = () => {
    showModal({
      modalType: "AlertModal",
      modalProps: {
        message: "success",
      },
    });
  };

  const handleClickConfirmModal = () => {
    showModal({
      modalType: "ConfirmModal",
      modalProps: {
        message: "yes or no",
        confirmText: "yes",
        cancelText: "no",
        handleConfirm: () => {
          console.log("yes");
        },
        handleClose: () => {
          console.log("no");
        },
      },
    });
  };

  const { posts, deletePost } = props;

  return (
    <$.Posts>
      <Button
        variant="contained"
        onClick={handleClickAlertModal}
        sx={{ mx: 2 }}
      >
        Alert Modal
      </Button>
      <Button
        variant="contained"
        onClick={handleClickConfirmModal}
        sx={{ mx: 2 }}
      >
        Confirm Modal
      </Button>
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
  return (
    <$.Post>
      {title}
      <$.YellowButton onClick={() => void deletePost(id)}>삭제</$.YellowButton>
    </$.Post>
  );
};

export default Posts;
