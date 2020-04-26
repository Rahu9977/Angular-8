import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User ={
    "id":999,
    "name":"Chaudhari Rahul",
    "email":"rahul007@gmail.com",
    "mobile":9726243566
  }
  constructor() { }

  ngOnInit() {
  }


}
