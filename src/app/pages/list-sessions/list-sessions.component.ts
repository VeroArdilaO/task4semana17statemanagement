import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from 'src/app/cache.service';
import { IBook } from 'src/app/core/interfaces/book';
import { BooksFacade } from 'src/app/store';
import { SessionFacade } from 'src/app/store/sessions';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {



  books$ = this.facade.books$

  sessions$ = this.facadeSession.sessions$

  constructor( private route: ActivatedRoute, private cache: CacheService,  private router: Router, private facadeSession: SessionFacade, private facade: BooksFacade) { }

  ngOnInit(): void {

  }

}

