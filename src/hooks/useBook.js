import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectNewBooks,
  selectReadBooks,
  selectTotalPage,
} from '../redux/books/selectors.js';

export const useBook = () => {
  const books = useSelector(selectBooks);
  const totalPage = useSelector(selectTotalPage);
  const newBooks = useSelector(selectNewBooks);
  const readBooks = useSelector(selectReadBooks);

  return {
    books,
    totalPage,
    newBooks,
    readBooks,
  };
};
