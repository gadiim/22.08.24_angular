import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DishComponent } from './dish/dish.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, DishComponent, EventCalendarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '22.08.24_pipes';
  
}
  

