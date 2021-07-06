import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBook } from './books.actions';
/* import { getName } from './books.selectors'; */

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
    
/*   public readonly name$ = this._store.select(getName); */

  constructor(private readonly _store: Store) {}

  public setName(id: string, title: string, description: string, pageCount: number, publishDate: number ) {
    this._store.dispatch(updateBook({ id,title, description, pageCount, publishDate }));
  }
}
