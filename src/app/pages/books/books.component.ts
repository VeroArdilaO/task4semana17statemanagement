import { Component, OnInit } from '@angular/core';
import { BooksFacade } from '../../store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

  public books$ = this._booksFacade.books$;

  constructor(private readonly _booksFacade: BooksFacade) {}

  ngOnInit(): void {
    /* this._booksFacade.createBook({
      id: '2',
      title: 'Pride and Prejuice',
      description: 'abcd',
      pageCount: 230,
      publishDate: 1890,
    }); */
  }
}
