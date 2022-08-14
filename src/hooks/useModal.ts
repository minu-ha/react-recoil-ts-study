import { useRecoilState } from "recoil";
import { modalState, ModalType } from "../store/Modal";

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
  };

  const hideModal = () => {
    setModal(null);
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal,
  };
}
