import React, { useState } from 'react';
import { CardWrap, ImageWrap } from './BookItem.styled';
import ModalBody from 'components/Modal/Modal';
import BookDetails from '../BookDetails/BookDetails';

const BookItem = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Modal is opening');
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    console.log('Modal is closing');
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <>
      <CardWrap onClick={openModal}>
        <ImageWrap>
          <img src={book.imageUrl} alt={book.title} />
        </ImageWrap>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </CardWrap>
      <ModalBody isOpen={isModalOpen} onRequestClose={closeModal}>
        <BookDetails onRequestClose={closeModal} book={book} />
      </ModalBody>
    </>
  );
};

export default BookItem;
