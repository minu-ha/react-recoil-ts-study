import { atom } from "recoil";
import { AlertModalProps } from "../components/AlertModal";
import { ConfirmModalProps } from "../components/ConfirmModal";
import { MODAL_TYPES } from "../components/GlobalModal";

export interface ConfirmModalType {
  moadlType: typeof MODAL_TYPES.ConfirmModal;
  modalProps: ConfirmModalProps;
}

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.AlertModal;
  modalProps: AlertModalProps;
}

export type ModalType = ConfirmModalType | AlertModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
