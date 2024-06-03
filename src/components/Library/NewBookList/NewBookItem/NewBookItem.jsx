import React, { useState } from 'react';
import icon from '../../../../images/sprite.svg';
import noImage from '../../../../images/no-image-book.png';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../../../redux/books/operations';
import { BtnDelete, ItemWrap, TextWrap } from './NewBookItem.styled';
import ModalBody from 'components/Modal/Modal';
import NewBookModal from '../NewBookModal/NewBookModal';

const NewBookItem = ({ books }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <ItemWrap>
      <li>
        <img
          src={books.imageUrl ? books.imageUrl : noImage}
          alt={books.title}
          onClick={openModal}
        />
        <TextWrap>
          <div>
            <h4>{books.title}</h4>
            <h5>{books.author}</h5>
          </div>
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteBook(books._id))}
          >
            <svg width="28" height="28">
              <use xlinkHref={`${icon}#trash`} />
            </svg>
          </BtnDelete>
        </TextWrap>
      </li>
      <ModalBody isOpen={isModalOpen} onRequestClose={closeModal}>
        <NewBookModal books={books} onRequestClose={closeModal} />
      </ModalBody>
    </ItemWrap>
  );
};

export default NewBookItem;
