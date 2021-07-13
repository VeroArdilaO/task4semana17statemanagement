import { Injectable, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../core/interfaces';
import { sessionSelector } from './session.selector';
import { addSession } from './session.actions';
import { ISession } from 'src/app/core/interfaces/bookSession';

@Injectable({
  providedIn: 'root',
})
export class SessionFacade {

  public readonly books$ = this._store.select(sessionSelector);

  constructor(private readonly _store: Store<IAppState>) {}

   public addSessions(book: ISession): void {
    this._store.dispatch(addSession({ newSession: book }));

  }

}