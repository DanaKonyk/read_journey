import React from 'react';
import { NotifyWrap } from './Notification.styled';
import book from '../../images/book.png';

const BookIsEnded = () => {
  return (
    <NotifyWrap>
      <img src={book} alt="book" />
      <h3>The book is read</h3>
      <p>
        It was an <span>exciting journey,</span>
        where each page revealed new horizons, and the characters became
        inseparable friends.
      </p>
    </NotifyWrap>
  );
};

export default BookIsEnded;
