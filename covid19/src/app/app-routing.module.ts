import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19dataComponent } from './covid19data/covid19data.component';


const routes: Routes = [
  {path:"",component:Covid19dataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
