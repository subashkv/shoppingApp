import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrfproduct',
  templateUrl: './addrfproduct.component.html',
  styleUrls: ['./addrfproduct.component.css']
})
export class AddrfproductComponent implements OnInit {

  brands = ["Samsung", "Oppo", "Apple"];
  form: FormGroup;
  productObject = {}

  constructor(
    private productService:ProductService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productname: new FormControl(''),
      productdescription: new FormControl(''),
      isproductavailable: new FormControl(false),
      productprice: new FormControl(''),
      productbrand: new FormControl(this.brands[0]),
      productimage: new FormControl('')
    })
  }

  addProduct(){
    this.productObject = {
      "name": this.form.value.productname,
      "description": this.form.value.productdescription,
      "price": this.form.value.productprice,
      "brand": this.form.value.brand,
      "isavailable": this.form.value.isproductavailable
    }
    //console.log(this.form.value);
  
    this.productService.addDatatoProducts('http://localhost:5000/products', this.productObject)
      .subscribe((data) => {
        alert("Product added Successfully!")
        this.router.navigate(["/productdetails"])
      })
  }


}
