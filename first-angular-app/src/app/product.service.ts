import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //using service class achive reusabality
  getproducts(){
    return [
      {
        "id":111,
        "name":"watch",
        "brand":"LG",
        "price":11122
      },
      {
        "id":113,
        "name":"mobile",
        "brand":"apple",
        "price":11122
      },
      {
        "id":111,
        "name":"watch",
        "brand":"LG",
        "price":11122
      }
      
    ];
  }

  constructor() { }
}
