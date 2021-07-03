import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IBooksStore } from '../../core/interfaces';

export const booksStateSelector = createFeatureSelector<IAppState, IBooksStore>(
  'booksState'
);

export const booksSelector = createSelector(
  booksStateSelector,
  (bookState) => bookState.books
);
