import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsDialog } from './appointments-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppointmentsDialog
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatIconModule
  ],
  entryComponents: [
    AppointmentsDialog
  ]
})
export class CreateAppointmentFormModule { }
