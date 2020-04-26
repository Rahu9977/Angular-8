import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"reg",component:RegistrationComponent},
  {path:"search",component:SearchDeleteComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
