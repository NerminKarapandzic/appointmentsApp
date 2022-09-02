import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";

const routes: Routes = [
  {path: '', component: CalendarPageComponent, children: [
      {path: ':year/:month/:day', loadChildren: () => import('../date-page/date-page.module').then(m => m.DatePageModule)},
    ]}
]

@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
  ]
})
export class CalendarPageModule { }
