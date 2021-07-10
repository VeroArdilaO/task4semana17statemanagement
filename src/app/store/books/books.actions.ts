import { createAction, props } from '@ngrx/store';
import { IBook } from '../../core/interfaces';

export const addBook = createAction('[User] Add Book', props<{ newBook: IBook }>());
export const resetBooks = createAction('[User] reset Book', props<{ books: IBook[] }>());
export const updateBook = createAction('[User] Update Book', props<IBook>());
export const updateNameBook = createAction(
  '[User] Update NameBook',
  props<{ name: string }>()
);
