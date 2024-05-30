import React from 'react';
import icon from '../../../../images/sprite.svg';
import noImage from '../../../../images/no-image-book.png';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../../../redux/books/operations';
import { BtnDelete, ItemWrap, TextWrap } from './NewBookItem.styled';

const NewBookItem = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <ItemWrap>
      <li>
        <img
          src={books.imageUrl ? books.imageUrl : noImage}
          alt={books.title}
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
    </ItemWrap>
  );
};

export default NewBookItem;
