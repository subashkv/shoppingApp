import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Order } from '../orders';

@Component({
  selector: 'app-finalorder',
  templateUrl: './finalorder.component.html',
  styleUrls: ['./finalorder.component.css']
})
export class FinalorderComponent implements OnInit {

  selectedItems = [];
  customer: any = [];
  customerid: number;
  existingCustomer: boolean;
  orderPlaced: boolean;
  customerOrders: any = [];
  orderObject = {};
  customerObject = {};
  customerData: any = [];
  data:Order[]=[];


  constructor(
    private dataService: DataService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.customerid = params['id'];
        this.existingCustomer = params['existing']=="true"?true:false;
      })
    this.selectedItems = this.dataService.getItem();
    this.customer = this.customerService.getCustomer();
  }

  placeOrder() {
    if(!this.existingCustomer){
      this.customerObject = {
        "name": this.customer.customername,
        "address": this.customer.customeraddress,
        "email": this.customer.customeremail,
        "mobile": this.customer.customermobile
      }
  
      this.customerService.addDatatoCustomers('http://localhost:5000/customers', this.customerObject)
        .subscribe((data) => {
        })
  
      this.customerService.getCustomersData('http://localhost:5000/customers')
        .subscribe((data) => {
          this.customerData = data;
          this.customerid = this.customerData[this.customerData.length - 1].id;
        })
    }
    this.orderObject = {
      "customerid": this.customerid,
      "items": this.selectedItems
    }
    this.orderService.addDatatoOrders('http://localhost:5000/orders', this.orderObject)
      .subscribe((data) => {
      })
      this.orderPlaced = true;
  }

  /*viewOrders(id) {
    this.router.navigate
    /*if (id > 0) {
      this.orderService.getOrderedData('http://localhost:5000/orders')
        .subscribe((data) => {
          this.customerOrders = data;
          this.customerOrders = this.customerOrders.filter(x => x.customerid == id)

        })
    }*/
    /*this.apiService.getCustomerOrders().subscribe(res=>{
      this.data = res;
    },err=>{
      console.log(err);
    })
    this.data = this.data.filter(x=>x.customerid == 100)
  }*/

}
