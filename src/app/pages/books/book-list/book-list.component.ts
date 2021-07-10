import { Component, OnInit } from '@angular/core';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"
import { BooksService } from 'src/app/core/services/books.service';
import { CacheService } from 'src/app/cache.service';
import { IBook, IBooksStore } from 'src/app/core/interfaces';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$ = this.facade.books$


  constructor(  private  facade: BooksFacade, private router: Router, private service: BooksService, private cache: CacheService) { }

 

  public async ngOnInit() {
    
 /*    await this.service.bookService(); */


  }

  ReturntoForm(){

    this.router.navigate(['/addbook'])
  }

  removeCard(id:string) {
    
    const books = this.cache.getCache('book');

    const newBooks = books.filter((book:any) => book.id !== id);

    this.cache.removeCache('book');

    this.cache.saveCache('book', newBooks);

    this.facade.resetBooks();

    newBooks.forEach((book: IBook) => this.facade.createBook(book));   

  }

}


