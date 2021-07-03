import { createReducer, on } from '@ngrx/store';
import { IBooksStore } from '../../core/interfaces';
import { addBook } from './books.actions';

const INITIAL_STATE: IBooksStore = {
  books: [],
};

export const bookReducer = createReducer(
  INITIAL_STATE,
  on(addBook, (state, action) => ({
    ...state,
    books: [...state.books, action.newBook],
  }))
);
