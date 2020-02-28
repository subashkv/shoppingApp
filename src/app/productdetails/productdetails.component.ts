import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productsData = {}

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productservice.getProductData("http://localhost:5000/products")
    .subscribe((data)=>{
      this.productsData = data
    })
  }

  deleteProduct(id){
    if(confirm("Are you sure want to delete product"+id)){
      this.productservice.deleteProductData('http://localhost:5000/products/'+id)
      .toPromise().then(
        ()=>{
          this.getProductData();
        }
      )
    }
  }

}
