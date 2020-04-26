import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mycovid19dataService {

  constructor(private http:HttpClient) { }

  public covid19reports(){
    return this.http.get("https://corona.lmao.ninja/v2/countries");
  }
}
