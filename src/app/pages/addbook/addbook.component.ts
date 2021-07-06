import { Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  isDevMode = isDevMode();

  form = new FormGroup({
    Id: new FormControl ("" , [Validators.required, Validators.maxLength(3)]),
    Title: new FormControl ("" , Validators.required),
    Description: new FormControl ("" , Validators.required),
    pagesNumber: new FormControl ("" , Validators.required),
    Year: new FormControl ("" , Validators.required),
  });

  constructor( ) { }

  ngOnInit(): void {


  }

  send(){

    console.log(JSON.stringify(this.form.value))

    this.form = new FormGroup({
      Id: new FormControl ("" , [Validators.required, Validators.maxLength(4)]),
      Title: new FormControl ("" , Validators.required),
      Description: new FormControl ("" , Validators.required),
      pagesNumber: new FormControl ("" , Validators.required),
      Year: new FormControl ("" , Validators.required),
    });
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


}
