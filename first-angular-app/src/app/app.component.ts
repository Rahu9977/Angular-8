import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app- Rahul  ';

  message:any="my message"; 
  //  <!-- onw way data binding -->

  msg:any="my message here"; 
  //two way binding
}
