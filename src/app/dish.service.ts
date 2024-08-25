import { Injectable } from '@angular/core';
import { DISHES } from './mock-dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() {
    return DISHES;
  }

}
