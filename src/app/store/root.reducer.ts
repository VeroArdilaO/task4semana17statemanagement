import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../core/interfaces';
import { bookReducer } from './books';
import {  sessionReducer } from './sessions';

export const rootReducer: ActionReducerMap<IAppState, Action> = {
  booksState: bookReducer,
  sessionState: sessionReducer,
};
