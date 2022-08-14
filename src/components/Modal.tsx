import React, { FC } from "react";
import { DeletePost } from "../hooks/usePosts";
import * as $ from "./Modal.styled";

interface ModalProps {
  id: number;
  deletePost: DeletePost;
  onClickToggleModal: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { deletePost, onClickToggleModal, id } = props;
  return (
    <$.ModalContainer>
      <$.DialogBox>
        <button
          onClick={() => {
            void deletePost(id);
          }}
        >
          삭제
        </button>

      </$.DialogBox>
      <$.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </$.ModalContainer>
  );
};

export default Modal;
