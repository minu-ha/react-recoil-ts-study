import { makeAutoObservable } from 'mobx';


interface ModalProps {
    modalTitle: string;
    modalContents?: string;
    onSubmit: () => void;
    onClose?: () => void;
  }

class ModalStore {
    isVisible = false;

    modalTitle = '';
    modalContents = ''
    onSubmit = () => {}
    onClose = () => {}


    constructor() {
        makeAutoObservable(this);
    }

    onVisibleModal = ({modalTitle, modalContents, onSubmit, onClose}: ModalProps) => {
        this.isVisible = true;
        this.modalTitle = modalTitle;
        this.modalContents = modalContents || '';
        this.onSubmit = onSubmit;
        this.onClose = onClose || function() {}
    }
    
    onCloseModal = () => {
        this.isVisible = false;
    }
}

export default new ModalStore();
// 싱글톤 사용방법
// 스토어 인스턴스를 만들어서 내보냄
// 근데 현업에서 이렇게 쓰는 경우가 거의 없음
// 이 방법 자체를 모름