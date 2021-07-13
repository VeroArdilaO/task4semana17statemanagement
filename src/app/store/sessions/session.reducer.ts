import { createReducer, on } from '@ngrx/store';
import { ISession } from 'src/app/core/interfaces/bookSession';
import { ISessionStore } from 'src/app/core/interfaces/sessionStore';
import { IBooksStore } from '../../core/interfaces';
import { addSession } from './session.actions';


const INITIAL_STATE: ISessionStore = {
  sessions: [
    
  ],
};

export const sessionReducer = createReducer(
  INITIAL_STATE,
  on(addSession, (state, action) => ({
    ...state,
    sessions: [...state.sessions, action.newSession],
  })),
);

