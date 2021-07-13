import { ISessionStore } from '.';
import { IBooksStore } from './book-store';

export interface IAppState {
  booksState: IBooksStore;
  sessionState: ISessionStore;
}
