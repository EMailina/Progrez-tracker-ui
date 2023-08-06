import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitHomeComponent } from './habit-home/habit-home.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HabitHomeComponent },
  { path: 'login', component: LogInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
