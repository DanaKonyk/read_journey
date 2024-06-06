import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'services/api';

export const fetchBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (
    { page = 1, limit = 10, title = '', author = '' },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.get(
        `/books/recommend?page=${page}&limit=${limit}&title=${title}&author=${author}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/books/add/${_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async ({ title, author, totalPages }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/books/add', {
        title,
        author,
        totalPages,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/books/remove/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOwnBook = createAsyncThunk(
  'books/fetchOwnBook',
  async ({ status }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/books/own', { status });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBookInfo = createAsyncThunk(
  'books/fetchBookInfo',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/books/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const startRead = createAsyncThunk(
  'books/startRead',
  async ({ id, page }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/books/reading/start', {
        id,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const finishRead = createAsyncThunk(
  'books/finishRead',
  async ({ id, page }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/books/reading/finish', {
        id,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProgress = createAsyncThunk(
  'books/deleteProgress',
  async ({ bookId, readingId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneBook = createAsyncThunk(
  'books/getOneBook',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/books/${_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
