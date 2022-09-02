import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourComponent } from './hour.component';
import {AppointmentsDialog} from "../appointments-dialog/appointments-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    declarations: [
        HourComponent
    ],
    exports: [
        HourComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule
    ],
    entryComponents: [
      AppointmentsDialog
    ]
})
export class HourModule { }
