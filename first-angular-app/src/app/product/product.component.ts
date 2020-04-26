import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any

  constructor(private service : ProductService) { 
    // this.products=service.getproducts();
  }

  // constructor() { 
  //   this.products=[
  //     {
  //       "id":111,
  //       "name":"watch",
  //       "brand":"LG",
  //       "price":11122
  //     },
  //     {
  //       "id":113,
  //       "name":"mobile",
  //       "brand":"apple",
  //       "price":11122
  //     },
  //     {
  //       "id":111,
  //       "name":"watch",
  //       "brand":"LG",
  //       "price":11122
  //     }
      
  //   ]
  // }

  ngOnInit() {
    this.products=this.service.getproducts();
  }

}
