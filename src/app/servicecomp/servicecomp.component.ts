import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/food/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServicecompComponent implements OnInit {
  myForm!: FormGroup;


  // users:any;
  // email: string | undefined;
  // password: string | undefined;

  // onSubmit() {
  //   console.log('Submitted');
  //   console.log('Email: ' + this.email);
  //   console.log('Password: ' + this.password);
  // }
  constructor(private apiservice:ApiService , private fb:FormBuilder, private prodservice:ProductsService){}
Products:any =[]
  ngOnInit(): void {
this.Products = this.prodservice.prod


    this.myForm = this.fb.group({
      firstName: ['', Validators.required , Validators.minLength(3)],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });


    // this.apiservice.getD().subscribe(data=>{
    //   this.users= data;
    // })
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}
