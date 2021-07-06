import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/books/book-list/book-list.component';
import { AddbookComponent } from './pages/addbook/addbook.component';


const routes: Routes = [

  { 
    path: 'books', component: BookListComponent 

  },

  { 
    path: 'addbook', component: AddbookComponent

  }

];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
