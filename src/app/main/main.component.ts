import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isExistingCustomer : boolean = false;
  customerName: string = "Arjen Robben"
  customerAddress: string = "Netherlands"
  customerMobile: number = 9876543210
  customerEmail: string = "robben@gmail.com"

  constructor() { }

  ngOnInit(): void {
  }

}
