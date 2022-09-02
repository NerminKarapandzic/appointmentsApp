import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.scss']
})
export class DatePageComponent implements OnInit {

  hours: number[] = Array(24).fill(0).map((x,i) => i);
  date!: Date

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.date = new Date(+params['year'], +params['month'], +params['day'])
    })
  }

  getDateWithStartOfHour(hour: number): Date {
    return new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), hour)
  }

  getAppointmentsForDate(hour: number) {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), hour)
    return this.appointmentService.getAppointmentsInThisHour(date)
  }
}
