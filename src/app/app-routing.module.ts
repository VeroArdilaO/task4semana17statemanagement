import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/books/book-list/book-list.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { AddSessionComponent } from './pages/add-session/add-session.component';

const routes: Routes = [
  { path: '', redirectTo: 'addbook', pathMatch: 'full' },

  { path: 'books', component: BookListComponent },

  { path: 'addbook', component: AddbookComponent },

  { path: 'addsession', component: AddSessionComponent },

/*   { path: 'addbook/:id', component: AddbookComponent }, */
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
