import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrderedData(apiUrl) {
    return this.httpClient.get(apiUrl)
  }

  addDatatoOrders(apiUrl, dataObj) {
    return this.httpClient.post(apiUrl, dataObj)
  }
}
