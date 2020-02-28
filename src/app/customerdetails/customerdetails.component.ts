import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  form: FormGroup;
  customerData: any = [];
  customer: any;
  customerObject = {}
  existingCustomer: boolean = false;
  customerid: number = 0;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      customername: new FormControl(''),
      customeraddress: new FormControl(''),
      customeremail: new FormControl(''),
      customermobile: new FormControl('')
    })
    this.customerService.getCustomersData('http://localhost:5000/customers')
      .subscribe((data) => {
        this.customerData = data;
      })
  }

  addCustomer() {
    this.customerService.addCustomer(this.form.value);
    this.router.navigate(["/finalorder",this.customerid, this.existingCustomer])
  }

  viewCustomer(event: any) {
    let selectedIndex = event.target.selectedIndex;
    if (selectedIndex > 0) {
      this.existingCustomer = true;
      this.customerid = this.customerData[selectedIndex - 1].id;
      this.customerService.getCustomersData('http://localhost:5000/customers/'+this.customerid)
      .subscribe((data) => {
        console.log(data);
        this.customer = data;
        console.log(this.customer.name);
        
          this.form = new FormGroup({
            customername: new FormControl(this.customer.name),
            customeraddress: new FormControl(this.customer.address),
            customeremail: new FormControl(this.customer.email),
            customermobile: new FormControl(this.customer.mobile)
          })
        
      })
    }
  }

}
