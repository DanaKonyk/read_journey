import { useQueryParams } from 'hooks/useQueryParams';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { options, visibleBook } from '../../../services/filterData';
import { fetchOwnBook } from '../../../redux/books/operations';
import Select from 'react-select';
import { useBook } from 'hooks/useBook';
import NewBookItem from './NewBookItem/NewBookItem';
import bookIcon from '../../../images/book.png';
import {
  BtnWrap,
  LibraryList,
  ListWrap,
  StyledSelect,
} from './NewBookList.styled';

const NewBookList = () => {
  const [bookFilter, setbookFilter] = useState('all');
  const { selectBook, changeBook } = useQueryParams();
  const dispatch = useDispatch();
  const { newBooks } = useBook();

  const getFilteredBooks = () => {
    return bookFilter ? options.find(book => book.value === bookFilter) : '';
  };

  const handleChange = newValue => {
    setbookFilter(newValue.value);
    changeBook(newValue.value);
  };

  useEffect(() => {
    dispatch(fetchOwnBook({ status: selectBook }));
  }, [dispatch, selectBook]);

  const visible = visibleBook(selectBook, newBooks);

  return (
    <>
      <BtnWrap>
        <h2>My Library</h2>
        <Select
          classNamePrefix="custom-select"
          name="books"
          defaultValue={bookFilter}
          options={options}
          value={getFilteredBooks()}
          onChange={handleChange}
          isSearchable={false}
        />
      </BtnWrap>
      <ListWrap>
        {newBooks?.length !== 0 ? (
          <LibraryList>
            {visible.map(book => (
              <NewBookItem key={book._id} books={book} />
            ))}
          </LibraryList>
        ) : (
          <div>
            <img src={bookIcon} alt="book" />
            <p>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </p>
          </div>
        )}
      </ListWrap>
    </>
  );
};

export default NewBookList;
