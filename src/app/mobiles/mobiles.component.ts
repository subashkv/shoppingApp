import { Component, OnInit } from '@angular/core';
import { mobiles } from './mobiles';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobileDetails = mobiles;
  mobileItems = [];
  brands: string[] = ["Samsung", "Oppo", "Apple"];
  selectedItems = [];
  height: number = 100;
  width: number = 100;
  totalPrice: number = 0;
  productItems: any[];
  //orderObject = {}

  constructor(private dataService: DataService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.selectedItems = [];
  }

  getProduct() {
    this.productItems = this.dataService.getItem();
  }

  addProduct(data) {
    this.dataService.addItem(data);
    this.getProduct();
  }

  showSelctedBrandItems(brand) {
    this.mobileItems = this.mobileDetails.filter(x => x.brand == brand);
  }

  selectedMobile(mobile, id) {
    this.dataService.addItem(mobile);
    this.getProduct();
    var flag = false;
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (this.selectedItems[i].id == id) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      this.selectedItems.push(mobile);
    }
    else {
      let index = this.selectedItems.indexOf(this.selectedItems.filter((m, i) => m.id == id)[0])
      this.selectedItems.splice(index, 1);
    }
    this.getTotalPrice();
  }

  getTotalPrice() {
    this.totalPrice = this.selectedItems.reduce(function (previous, current) {
      return previous += current.price * current.quantity
    }, 0)
  }

}
