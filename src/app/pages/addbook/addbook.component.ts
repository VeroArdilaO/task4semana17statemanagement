import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

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

    console.log(this.form.value)

    this.form = new FormGroup({
      Id: new FormControl ("" , [Validators.required, Validators.maxLength(4)]),
      Title: new FormControl ("" , Validators.required),
      Description: new FormControl ("" , Validators.required),
      pagesNumber: new FormControl ("" , Validators.required),
      Year: new FormControl ("" , Validators.required),
    });
   
  }

}
