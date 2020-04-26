import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getbooks(){
    let res=  this.http.get("http://localhost:8080/findAllBookss");
    // res.subscribe((data)=>this.books=data);
    return res;
  }
}
