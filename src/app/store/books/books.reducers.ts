import { createReducer, on } from '@ngrx/store';
import { IBook } from '../../core/interfaces';
import { updateBook, updateNameBook } from './books.actions';

const INITIAL_STATE: IBook = {
    id: "",
    title: "",
    description: "",
    pageCount: 0,
    publishDate: 0
};

export const bookReducer = createReducer(
  INITIAL_STATE,
  on(updateBook, (state, { id, title, description, pageCount, publishDate }) => ({ id, title,description,pageCount,publishDate })),
  on(updateNameBook, (state, { name }) => ({ ...state, name }))
);
