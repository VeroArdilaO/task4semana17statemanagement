import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../core/interfaces';
import { bookReducer } from './books';

export const rootReducer: ActionReducerMap<IAppState, Action> = {
  booksState: bookReducer,
};
