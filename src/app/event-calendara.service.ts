import { Injectable } from '@angular/core';
import { EVENTS } from './mock-event-calendar';
import { YEARS } from './mock-years';
import { MONTHS } from './mock-months';

@Injectable({
  providedIn: 'root'
})
export class EventCalendaraService {

  constructor() { }

  getEvents() {
    return EVENTS;
  }

  getYears() {
    return YEARS;
  }
  
  getMonths() {
    return MONTHS;
  }
}
