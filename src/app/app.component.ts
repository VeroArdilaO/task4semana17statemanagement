import { Component, OnInit } from '@angular/core';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"
import { BooksService } from 'src/app/core/services/books.service';
import { CacheService } from './cache.service';
import { IBook } from './core/interfaces/book';
import { SessionFacade } from './store/sessions/session.facade';
import { ISession } from './core/interfaces/bookSession';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoNgRx';


constructor(  private  facade: BooksFacade, private router: Router, private service: BooksService, private cache: CacheService, private facadeSession: SessionFacade ) { }

 

  public async ngOnInit() {
 /*    debugger; */
    let cachebooks = this.cache.getCache("book");
    
    if(cachebooks.length ===  0) {

      cachebooks =  await this.service.bookService();
      this.cache.saveCache('book', cachebooks )
     /* cachebooks.forEach((book: IBook) => this.facade.createBook(book))  */
    } 

    cachebooks.forEach((book: IBook) => this.facade.createBook(book)) 

    }
    
  }
