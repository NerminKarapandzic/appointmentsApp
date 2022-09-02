import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatCalendar} from "@angular/material/datepicker";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit, AfterViewInit {

  @ViewChild('calendar') calendar!: MatCalendar<Date>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const date = new Date();
    this.calendar.selected = date;
    this.router.navigate(['/calendar', date.getFullYear(), date.getMonth(), date.getDate()]);
  }

  dateChanged(event: Date) {
    this.router.navigate(['/calendar', event.getFullYear(), event.getMonth(), event.getDate()]);
    this.calendar.selected = event;
  }
}
