import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Appointment} from "../../services/appointments";
import {AppointmentsService} from "../../services/appointments.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-appointments-dialog',
  templateUrl: './appointments-dialog.component.html',
  styleUrls: ['./appointments-dialog.component.scss']
})
export class AppointmentsDialog implements OnInit {

  hours = Array.from({length: 24}, (_, i) => i)
  hoursTo = this.hours

  appointmentForm: FormGroup = this.fb.group({
    dateFrom: new FormControl(),
    dateTo: new FormControl(),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { appointments: Appointment[], date: Date },
    private appointmentService: AppointmentsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.appointmentForm.patchValue({
      dateFrom: this.data.date.getHours(),
      dateTo: this.data.date.getHours() + 1
    })
  }

  addAppointment() {
    const appointment = {
      id: Math.random().toString(36).substring(2, 12),
      from: new Date(this.data.date.getFullYear(), this.data.date.getMonth(), this.data.date.getDate(), this.appointmentForm.value.dateFrom),
      to: new Date(this.data.date.getFullYear(), this.data.date.getMonth(), this.data.date.getDate(), this.appointmentForm.value.dateTo),
    }

    this.appointmentService.addAppointment(appointment)
  }

  updateAppointmentForm(event: MatSelectChange) {
    this.appointmentForm.get('dateTo')?.setValidators(Validators.min(event.source.value + 1))
    this.hoursTo = this.hours.slice(event.source.value + 1)
    this.appointmentForm.get('dateTo')?.setValue(this.hoursTo[0])
  }

  deleteAppointment(id: string) {
    this.appointmentService.deleteAppointment(id)
  }
}
