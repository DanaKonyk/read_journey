import React, { useState } from 'react';
import { CardWrap, ImageWrap } from './BookItem.styled';
import ModalBody from 'components/Modal/Modal';
import BookDetails from '../BookDetails/BookDetails';

const BookItem = ({ book }) => {
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
    <>
      <CardWrap onClick={openModal}>
        <ImageWrap>
          <img src={book.imageUrl} alt={book.title} />
        </ImageWrap>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </CardWrap>
      <ModalBody isOpen={isModalOpen} isClose={closeModal}>
        <BookDetails isClose={closeModal} book={book} />
      </ModalBody>
    </>
  );
};

export default BookItem;
