import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root.reducer';
import { BooksComponent } from './pages/books/books.component';
import { BooksFacade } from './store';
import { AppRoutingModule } from './app-routing.module';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, BooksComponent, AddbookComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [BooksFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
