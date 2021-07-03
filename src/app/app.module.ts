import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root.reducer';
import { BooksComponent } from './pages/books/books.component';
import { BooksFacade } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      name: 'test',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
