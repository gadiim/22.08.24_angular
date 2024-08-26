import { Component } from '@angular/core';
import { EventCalendaraService } from '../event-calendara.service';
import { EVENTS } from '../mock-event-calendar';
import { YEARS } from '../mock-years';
import { MONTHS } from '../mock-months';
import { CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-event-calendar',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgFor, NgIf],
  templateUrl: './event-calendar.component.html',
  styleUrl: './event-calendar.component.css'
})
export class EventCalendarComponent {
  events = EVENTS;
  years = YEARS;
  months = MONTHS;
  selectedEvent: any; //all buttons are inactive
  // selectedEvent: string = ''; //clear button is active

  constructor(private eventsService: EventCalendaraService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  getMonthFromDate(date: string): string {
    return date.slice(5, 7);
  }

  getYearFromDate(date: string): string {
    return date.slice(0, 4);
  }

  highlightEvent(eventTitle: any) {
    this.selectedEvent = eventTitle;
  }
}
