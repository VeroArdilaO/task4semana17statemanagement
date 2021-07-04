import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/root.reducer';
import { BookListComponent } from './pages/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


