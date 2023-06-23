import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prod =[
    { id :1, name: 'Laptop', Comp:'Hp', Price:59000},
    { id :2, name: 'Tv', Comp:'LG', Price:18000},
    { id :3, name: 'Mobile', Comp:'Apple', Price:119000},
]
  constructor() { }
}
