import { useBook } from 'hooks/useBook';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import icon from '../../../../images/sprite.svg';
import { fetchBooks } from '../../../../redux/books/operations';
import { Link, BooksList, RecommendedWrap } from './RecommendedList.styled';

const RecommendedList = () => {
  const [page] = useState(1);
  const [limit] = useState(3);
  const dispatch = useDispatch();
  const { books } = useBook();

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <RecommendedWrap>
      <h3>Recommended</h3>
      <BooksList>
        {books.map(book => (
          <li key={book._id}>
            <img src={book.imageUrl} alt={book.title} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
          </li>
        ))}
      </BooksList>
      <Link to="/recommended">
        Home
        <svg width="24" height="24">
          <use xlinkHref={`${icon}#log-in`} />
        </svg>
      </Link>
    </RecommendedWrap>
  );
};

export default RecommendedList;
