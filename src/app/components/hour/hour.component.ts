import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Appointment} from "../../services/appointments";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AppointmentsDialog} from "../appointments-dialog/appointments-dialog.component";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss'],
  host: {
    '[class.has-appointments]': 'hasAppointments',
  }
})
export class HourComponent implements OnInit, OnDestroy {

  @Input() date!: Date
  hasAppointments = false

  destroyed: Subject<void> = new Subject<void>()

  @Input() $appointments!: Observable<Appointment[]>
  appointments!: Appointment[]

  dialogRef!: MatDialogRef<AppointmentsDialog>

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.$appointments.pipe(takeUntil(this.destroyed))
      .subscribe(appointments => {
        if(appointments.length > 0){
          this.hasAppointments = true
        }else{
          this.hasAppointments = false
        }

        this.appointments = appointments
        this.dialogRef.componentInstance.data = this.getDialogData();
      })
  }

  @HostListener('click') onClick() {
    this.openDialog();
  }

  openDialog(){
    const data: {appointments: Appointment[], date: Date} = this.getDialogData()
    this.dialogRef = this.dialog.open(AppointmentsDialog, {data})
  }

  private getDialogData(): {appointments: Appointment[], date: Date} {
    return {
      appointments: this.appointments,
      date: this.date
    }
  }

  ngOnDestroy() {
    this.destroyed.next()
    this.destroyed.complete()
  }
}
