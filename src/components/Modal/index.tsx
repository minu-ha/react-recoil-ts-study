import React, { FC } from 'react';
import * as $ from './Modal.styled'
import ModalStore from '../../stores/ModalStore'
import { observer } from 'mobx-react'

const Modal: FC = () => {
  const { modalTitle, modalContents, onSubmit, onClose } = ModalStore;

  return (
    <$.Container>
        <$.Background/>
        <$.Dialog>
            <$.Title>{modalTitle}</$.Title>
            {modalContents && <$.Contents>{modalContents}</$.Contents>}
            <$.Controls>
                <$.Control>
                    <$.Button onClick={onSubmit}>
                        예
                    </$.Button>
                </$.Control>
                {
                    onClose && (
                        <$.Control>
                            <$.Button onClick={onClose}>
                                아니오
                            </$.Button>
                        </$.Control>
                    )
                }
     
            </$.Controls>
        </$.Dialog>
    </$.Container>
  );
}

export default observer(Modal);
