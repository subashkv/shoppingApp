import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addtdproduct',
  templateUrl: './addtdproduct.component.html',
  styleUrls: ['./addtdproduct.component.css']
})
export class AddtdproductComponent implements OnInit {

  brands = ["Samsung", "Oppo", "Apple"]
  product: Product;
  productDetails: any[];
  height: number = 25;
  width: number = 25;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.product = new Product({
      productname: "",
      productdescription: "",
      isproductavailable: false,
      productprice: "",
      productbrand: this.brands[0],
      productimage: ""
    })
  }

  addProduct(addform) {
    this.dataService.addItem(addform.form.value);
    this.productDetails = this.dataService.getItem();
  }
}

