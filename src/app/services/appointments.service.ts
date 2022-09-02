import { Injectable } from '@angular/core';
import {Appointment} from "./appointments";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appointments: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([])

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return this.appointments.asObservable();
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.next([...this.appointments.value, appointment])
    console.log('appointment added', this.appointments.value)
  }

  deleteAppointment(appointmentId: string): void {
    this.appointments.next(this.appointments.value.filter(a => a.id !== appointmentId))
  }

  getAppointmentById(id: string): Appointment | undefined {
    return undefined;
  }

  getAppointmentsInThisHour(date: Date): Observable<Appointment[]> {
    return this.appointments.asObservable().pipe(
      map(appointments => appointments.filter(appointment => {
         const hour = date.getHours();
         return appointment.from.getFullYear() === date.getFullYear() &&
                appointment.from.getMonth() === date.getMonth() &&
                appointment.from.getDate() === date.getDate() &&
                ( appointment.from.getHours() === hour ||
                  (appointment.from.getHours() <= hour && appointment.to.getHours() -1 >= hour)
                )
      }))
    );
  }
}
