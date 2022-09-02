import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'appointments', pathMatch: 'full'},
  {path: 'calendar', loadChildren: () => import('./calendar-page/calendar-page.module').then(m => m.CalendarPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
