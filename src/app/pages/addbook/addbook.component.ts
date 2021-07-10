import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"
import { CacheService } from 'src/app/cache.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  isDevMode = isDevMode();

  form = new FormGroup({
    id: new FormControl (null , [Validators.required, Validators.maxLength(3)]),
    title: new FormControl ("" , Validators.required),
    description: new FormControl ("" , Validators.required),
    pagesNumber: new FormControl ("" , Validators.required),
    Year: new FormControl ("" , Validators.required),
  });


  constructor( private  facade: BooksFacade, private router: Router, private cache: CacheService) { }

  

  ngOnInit(): void {
    
  
  }

  send(){

    if(this.form.invalid){

      const formControl = this.form.get('id') as FormControl;
      formControl.markAsTouched();
      formControl.markAsDirty();
      this.form.updateValueAndValidity();

      const formControlTitle = this.form.get('title') as FormControl;
      formControlTitle.markAsTouched();
      formControlTitle.markAsDirty();
      this.form.updateValueAndValidity();

      const formControlDescription = this.form.get('description') as FormControl;
      formControlDescription.markAsTouched();
      formControlDescription.markAsDirty();
      this.form.updateValueAndValidity();

      const formControlpagesNumber = this.form.get('pagesNumber') as FormControl;
      formControlpagesNumber.markAsTouched();
      formControlpagesNumber.markAsDirty();
      this.form.updateValueAndValidity();

      const formControlYear = this.form.get('Year') as FormControl;
      formControlYear.markAsTouched();
      formControlYear.markAsDirty();
      this.form.updateValueAndValidity();
     
    } else {
      /* debugger; */

      console.log(JSON.stringify(this.form.value))

      const newBook = { ...this.form.value}

      const cacheBooks = this.cache.getCache('book');
      debugger;
      const duplicatedBookId = cacheBooks.filter((book: any) => book.id === newBook.id )

      if(duplicatedBookId.length !== 0 ){

        alert('Book Id repeat');

        return;

      }

      cacheBooks.push(newBook);

      this.cache.removeCache('book');

      this.cache.saveCache('book', cacheBooks);

      this.facade.createBook(newBook)


      alert('succesfully Add Book')

      this.router.navigate(['/books'])

  
    /*   localStorage.setItem("DataBook", JSON.stringify('this.form'));

      this.form = localStorage.getItem("DataBook");

      console.log(this.form)   */  
 


  
    }
    
  }


  shouldMessage(formcontrolname:string, errorType: string) {
    let errors;
    const formControl = this.form.get(formcontrolname) as FormControl;
    if(formControl.errors) {
       errors = formControl.errors;
       console.log(errors)
       return formControl.errors[errorType]
    }
    return errors
  }

  /*  Cuando se pide tipar una función
  
  shouldMessage(formcontrolname:string, errorType: string):boolean {
    let hasErrorType:boolean = false;
    const formControl = this.form.get(formcontrolname) as FormControl;
    if(formControl.errors) {
       hasErrorType = formControl.errors[errorType]
    }
    return hasErrorType
  }
  */


  reset() {

    const formControl = this.form.get('Id') as FormControl;
    this.form.reset();
  }


}


