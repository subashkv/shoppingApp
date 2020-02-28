import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Order } from './orders';

const apiUrl = "http://localhost:5000/orders"
const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getCustomerOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(apiUrl,httpOptions)
    .pipe(
      tap(todo => {console.log('Customer Orders')}),
      catchError(this.handleError('getCustomerOrders',[]))
    )
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T> =>{
      console.error(error);
      return of(result as T)
    };
  }
}
