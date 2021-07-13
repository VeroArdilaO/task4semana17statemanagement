import { createAction, props } from '@ngrx/store';
import { ISession } from 'src/app/core/interfaces/bookSession';


export const addSession = createAction('[session] Add Session', props<{ newSession: ISession }>());
