import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksFacade } from 'src/app/store/books/books.facade';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiBooks = "https://fakerestapi.azurewebsites.net/api/v1/Books"



  constructor(private http: HttpClient, private  facade: BooksFacade ) {
   }


 public async bookService() {

    const books:any = await  this.http.get(this.apiBooks).toPromise();

    const sliceBooks = books.slice(0,5)

   return sliceBooks;
  
  }

}




/* sliceBooks.forEach((book: IBook) => this.facade.createBook(book)) */