import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CacheService } from 'src/app/cache.service';
import { ISession } from 'src/app/core/interfaces/bookSession';
import { SessionFacade } from 'src/app/store/sessions';
import { IBook, ISessionStore} from 'src/app/core/interfaces';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  
  book:any = null;

  date = new FormControl(null, Validators.required);



  constructor(  private route: ActivatedRoute, private cache: CacheService,  private router: Router, private facadeSession: SessionFacade ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
   

      const bugId = parseInt(params.bookId);

      const books:Array<any> = this.cache.getCache("book");

      this.book =  books.find(e => e.id === bugId);

    if(!this.book) {

      alert('Book Not Find')
      this.router.navigate(['books']);

    }

    });
  }

  public createSession() {

    if(this.date.invalid) {
      alert('Invalid date')
      return
    } 


    const session = {

      ...this.book, date: this.date.value, id: this.book.id
    }
  
    const sessions:Array<ISession> = this.cache.getCache('sessions')

    sessions.push(session);

    this.cache.saveCache('session', sessions)


    console.log(this.facadeSession.addSessions(session))


    alert('Succesfully Session created ');

    this.router.navigate(['/listsessions'])

    
  } 
 
}
