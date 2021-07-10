import { Injectable, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IBook } from '../../core/interfaces';
import { addBook, resetBooks } from './books.actions';
import { booksSelector } from './books.selectors';

@Injectable({
  providedIn: 'root',
})
export class BooksFacade {

  public readonly books$ = this._store.select(booksSelector);

  constructor(private readonly _store: Store<IAppState>) {}

   public createBook(book: IBook): void {
    this._store.dispatch(addBook({ newBook: book }));

  }

  public resetBooks() {
    this._store.dispatch(resetBooks({ books: [] }));
  }
}
