import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TechComponent } from './tech/tech.component';


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"hr",component:HrhelpdeskComponent},
  {path:"profile",component:ProfileComponent},
  {path:"learning",component:LearningComponent},
  {path:"learning/:technology",component:TechComponent},
  {path:"payroll",component:PayrollComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
