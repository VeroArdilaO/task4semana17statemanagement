import { Component, OnInit, isDevMode } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksFacade } from 'src/app/store/books/books.facade';
import {Router} from "@angular/router"

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  isDevMode = isDevMode();

  form = new FormGroup({
    id: new FormControl ("" , [Validators.required, Validators.maxLength(3)]),
    title: new FormControl ("" , Validators.required),
    description: new FormControl ("" , Validators.required),
    pagesNumber: new FormControl ("" , Validators.required),
    Year: new FormControl ("" , Validators.required),
  });

  constructor( private  facade: BooksFacade, private router: Router) { }

  

  ngOnInit(): void {
   /*  this.facade.createBook ({
      id: '2',
      title: 'Pride and Prejuice',
      description: 'abcd',
      pageCount: 230,
      publishDate: 1890,
    }) */
  }

  send(){

    if(this.form.invalid){
      debugger;
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

      console.log(JSON.stringify(this.form.value))

      this.facade.createBook ({
         ...this.form.value
      }) 

      alert('succesfully Add Book')

      this.router.navigate(['/books'])
    }
    
   

   /*  this.form = new FormGroup({
      Id: new FormControl ("" , [Validators.required, Validators.maxLength(4)]),
      Title: new FormControl ("" , Validators.required),
      Description: new FormControl ("" , Validators.required),
      pagesNumber: new FormControl ("" , Validators.required),
      Year: new FormControl ("" , Validators.required),
    });
 */
   

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


