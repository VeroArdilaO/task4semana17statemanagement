import { Component, OnInit } from '@angular/core';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$ = this.facade.books$


  constructor(  private  facade: BooksFacade, private router: Router) { }

 

  ngOnInit(): void {
    
    


  }

  ReturntoForm(){
    this.router.navigate(['/addbook'])
  }

  

}
