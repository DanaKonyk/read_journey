import React from 'react';
import { CardWrap, ImageWrap } from './BookItem.styled';

const BookItem = ({ book }) => {
  return (
    <>
      <CardWrap>
        <ImageWrap>
          <img src={book.imageUrl} alt={book.title} />
        </ImageWrap>

        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </CardWrap>
    </>
  );
};

export default BookItem;
