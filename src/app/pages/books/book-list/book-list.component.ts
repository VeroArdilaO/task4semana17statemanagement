import { Component, OnInit } from '@angular/core';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"
import { BooksService } from 'src/app/core/services/books.service';
import { CacheService } from 'src/app/cache.service';
import { IBook, IBooksStore } from 'src/app/core/interfaces';
import { addSession, SessionFacade } from 'src/app/store/sessions';
import { ISession } from 'src/app/core/interfaces/bookSession';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$ = this.facade.books$

  form = new FormGroup({
    id: new FormControl(null, [Validators.required, Validators.maxLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    pagesNumber: new FormControl('', Validators.required),
    Year: new FormControl('', Validators.required),
  });

  session: ISession = {

    id: "" , 
    book:   {
      id: "",
      title: "",
      description: "",
      pageCount: 0,
      publishDate: 0,
    },
    date: ""
  }


  constructor(  private  facade: BooksFacade, private router: Router, private service: BooksService, private cache: CacheService, private facadeSession: SessionFacade) { }

 

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

/*   get getId() {

    this.facadeSession
  } 
 */

  callSession(idBook: string ) {

      const sessions:Array<ISession> = this.cache.getCache('sessions')

      sessions.push(this.session);

      this.cache.saveCache('session', sessions)

      console.log(this.facadeSession.addSessions(this.session))

      console.log(idBook);

      this.router.navigate(['/addsession'], { queryParams: { bookId: idBook }})

  }
}

