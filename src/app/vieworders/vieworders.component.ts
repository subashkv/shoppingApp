import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  customerid: number;
  ordersHistory:any = [];

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.customerid = params['id'];
      })
      this.orderService.getOrderedData('http://localhost:5000/orders')
      .subscribe((data)=>{
        this.ordersHistory = data;
        this.ordersHistory = this.ordersHistory.filter(x=>x.customerid == +this.customerid)
      })
  }

}
