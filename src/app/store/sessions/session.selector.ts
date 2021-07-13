import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, ISessionStore} from '../../core/interfaces';

export const sessionStateSelector = createFeatureSelector<IAppState, ISessionStore>(
  'sessionState'
);

export const sessionSelector = createSelector (

    sessionStateSelector,
  (sessionstate) => sessionstate.sessions
);
