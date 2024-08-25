import { Component } from '@angular/core';
import { DishService } from '../dish.service';
import { DISHES } from '../mock-dishes';
import { CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent {
  dishes = DISHES;
  // selectedDish: any; //all buttons are inactive
  selectedDish: string = ''; //menu button is active

  constructor(private dishesService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishesService.getDishes();
  }

  highlightDish(dishTitle: string) {
    this.selectedDish = dishTitle;
  }

}
