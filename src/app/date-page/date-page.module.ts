import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { DatePageComponent } from './date-page/date-page.component';
import {HourModule} from "../components/hour/hour.module";

const routes: Routes = [
  {path: '', component: DatePageComponent}
]

@NgModule({
  declarations: [
    DatePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HourModule
  ]
})
export class DatePageModule { }
