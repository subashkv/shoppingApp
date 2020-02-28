import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {

  brands = ["Samsung", "Oppo", "Apple"];
  form: FormGroup;
  productObject: any = [];
  id:number;

  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id']
      })

      this.productService.getProductData('http://localhost:5000/products/'+this.id)
      .subscribe((data)=>{
        this.productObject=data,
        this.form = new FormGroup({
          productname: new FormControl(this.productObject.name),
          productdescription: new FormControl(this.productObject.description),
          isproductavailable: new FormControl(this.productObject.isavailable),
          productprice: new FormControl(this.productObject.price),
          productbrand: new FormControl(this.productObject.brand)
        })
      })
  }

  updateProduct(){
    this.productObject = {
      "name": this.form.value.productname,
      "description": this.form.value.productdescription,
      "price": this.form.value.productprice,
      "brand": this.form.value.brand,
      "isavailable": this.form.value.isproductavailable
    }
    //console.log(this.form.value);

    this.productService.updateProductData('http://localhost:5000/products/' + this.id, this.productObject)
      .toPromise().then(
        (error) => {
          alert("Product Data updated successfully")
          this.router.navigate(['/productdetails'])
        }
      )
  }

}
