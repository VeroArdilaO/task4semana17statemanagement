import { createReducer, on } from '@ngrx/store';
import { IBooksStore } from '../../core/interfaces';
import { addBook, resetBooks } from './books.actions';

const INITIAL_STATE: IBooksStore = {
  books: [
  /*   {
      id: '1',
      title: 'What the heck is EOS?',
      description: 'A complete guide for Employees in Companies Running on EOS',
      pageCount: 170,
      publishDate: 2020,
    }, */
  ],
};

export const bookReducer = createReducer(
  INITIAL_STATE,
  on(addBook, (state, action) => ({
    ...state,
    books: [...state.books, action.newBook],
  })),

  on(resetBooks, (state, action) => ({
    ...state,
    books: [],
  }))
);
