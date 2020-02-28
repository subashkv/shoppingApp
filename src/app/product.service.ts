import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductData(apiUrl) {
    return this.httpClient.get(apiUrl)
  }

  addDatatoProducts(apiUrl, dataObj) {
    return this.httpClient.post(apiUrl, dataObj)
  }

  updateProductData(apiUrl, dataObj){
    return this.httpClient.put(apiUrl,dataObj)
  }

  deleteProductData(apiUrl){
    return this.httpClient.delete(apiUrl);
  }
}
