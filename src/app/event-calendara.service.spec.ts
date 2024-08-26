import { TestBed } from '@angular/core/testing';

import { EventCalendaraService } from './event-calendara.service';

describe('EventCalendaraService', () => {
  let service: EventCalendaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCalendaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
