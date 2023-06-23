import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!:Food;
  
  constructor(private activatedRoute:ActivatedRoute , private foodService:FoodService){
    activatedRoute.params.subscribe(params=>{
      if(params['id'])
      this.food= foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
