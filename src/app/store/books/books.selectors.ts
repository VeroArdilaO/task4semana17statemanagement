import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IBook } from '../../core/interfaces';

const userState = createFeatureSelector<IAppState, IBook>('book');

export const getName = createSelector (
  userState,
  state => state.title
);
