import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import icon from '../../images/sprite.svg';
import { BtnClose, ModalWrap } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid rgba(104, 104, 104, 0.2)',
    borderRadius: '12px',
    zIndex: '1300',
    overflowY: 'auto',
    scrollbarColor: '#888 #e0e0e0',
    scrollbarWidth: 'thin',
    backgroundColor: '#1F1F1F',
  },
  overlay: {
    backgroundColor: 'rgba(20, 20, 20, .6)',
    zIndex: '1',
  },
};

Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');

const ModalBody = ({ isOpen, isClose, children }) => {
  return createPortal(
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={isClose}>
      <ModalWrap>
        <BtnClose type="button" onClick={isClose}>
          <svg width="22" height="22">
            <use xlinkHref={`${icon}#close`} />
          </svg>
        </BtnClose>
      </ModalWrap>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};

export default ModalBody;
