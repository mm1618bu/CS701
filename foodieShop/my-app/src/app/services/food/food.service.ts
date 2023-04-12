import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
      id:1,
      name:'',
      cookTime:'',
      price:0,
      favorite:false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '',
      tags: ['','','']
      }
    ]
  }
}
