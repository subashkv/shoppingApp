import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: any;

  constructor(private httpClient: HttpClient) { }

  addCustomer(data) {
    this.customer = data;
  }

  getCustomer() {
    return this.customer;
  }

  getCustomersData(apiUrl) {
    return this.httpClient.get(apiUrl)
  }

  addDatatoCustomers(apiUrl, dataObj) {
    return this.httpClient.post(apiUrl, dataObj)
  }

}
