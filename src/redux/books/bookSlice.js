import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addBook,
  addNewBook,
  deleteBook,
  deleteProgress,
  fetchBookInfo,
  fetchBooks,
  fetchOwnBook,
  finishRead,
  getOneBook,
  startRead,
} from './operations.js';

const pending = state => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  books: [],
  newBooks: [],
  readBooks: [],
  isLoading: false,
  erorr: null,
  page: 1,
  perPage: 10,
  totalPage: 0,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload.results;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.newBooks.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.newBooks.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.newBooks = state.newBooks.filter(
          newBooks => newBooks._id !== action.payload
        );
      })
      .addCase(fetchOwnBook.fulfilled, (state, action) => {
        state.newBooks = action.payload;
      })
      .addCase(fetchBookInfo.fulfilled, (state, action) => {
        state.readBooks = action.payload;
      })
      .addCase(deleteProgress.fulfilled, (state, action) => {
        state.readBooks = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getOneBook.fulfilled,
          startRead.fulfilled,
          finishRead.fulfilled
        ),
        (state, action) => {
          state.readBooks = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchBooks.pending,
          addBook.pending,
          addNewBook.pending,
          deleteBook.pending,
          fetchOwnBook.pending,
          fetchBookInfo.pending,
          startRead.pending,
          finishRead.pending,
          deleteProgress.pending,
          getOneBook.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchBooks.rejected,
          addBook.rejected,
          addNewBook.rejected,
          deleteBook.rejected,
          fetchOwnBook.rejected,
          fetchBookInfo.rejected,
          startRead.rejected,
          finishRead.rejected,
          deleteProgress.rejected,
          getOneBook.rejected
        ),
        rejected
      );
  },
});

export const bookReducer = bookSlice.reducer;
