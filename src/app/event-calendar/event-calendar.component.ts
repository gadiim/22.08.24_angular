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
  // selectedEvent: any; //all buttons are inactive
  // selectedYear: any;
  // selectedMonth: any;
  selectedEvent: string = ''; //clear button is active
  selectedYear: string = ''; //clear button is active
  selectedMonth: string = ''; //clear button is active

  constructor(private eventsService: EventCalendaraService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  toString(data: number): string {
    return data < 10 ? '0' + data : String(data); //id XX = data XX number -> string
  }

  getMonthFromDate(date: string): string { // getting month from yyyy-MM-dd
    return date.slice(5, 7);
  }

  getYearFromDate(date: string): string { // getting year from yyyy-MM-dd
    return date.slice(0, 4);
  }

  highlightEvent(eventTitle: any) {
    this.selectedEvent = eventTitle;
  }

  highlightYear(year: string) {
    this.selectedYear = year;
  }

  highlightMonth(month: string) {
    this.selectedMonth = month;
  }

  clearYear() {
    this.selectedYear = '';
  }

  clearMonth() {
    this.selectedMonth = '';
  }
}
