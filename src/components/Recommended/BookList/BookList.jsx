import { useBook } from '../../../hooks/useBook';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import icon from '../../../images/sprite.svg';
import BookItem from './BookItem/BookItem';
import { fetchBooks } from '../../../redux/books/operations';
import { BooksList, BtnMove, BtnWrap, Wrap } from './BookList.styled';

const BookList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { totalPages, books } = useBook();
  const dispatch = useDispatch();

  const handleForward = () =>
    page === totalPages ? undefined : setPage(page + 1);
  const handleBack = () => (page === 1 ? undefined : setPage(page - 1));

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLimit(screenWidth < 768 ? 2 : screenWidth > 1439 ? 10 : 8);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <Wrap>
      <BtnWrap>
        <h2>Recommended</h2>
        <div>
          <BtnMove type="button" onClick={handleBack}>
            <svg width="20" height="20">
              <use xlinkHref={`${icon}#icon-left`} />
            </svg>
          </BtnMove>
          <BtnMove type="button" onClick={handleForward}>
            <svg width="20" height="20">
              <use xlinkHref={`${icon}#icon-right`} />
            </svg>
          </BtnMove>
        </div>
      </BtnWrap>
      <BooksList>
        {books?.map(book => (
          <BookItem key={book._id} book={book} />
        ))}
      </BooksList>
    </Wrap>
  );
};

export default BookList;
