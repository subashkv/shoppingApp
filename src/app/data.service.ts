import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [];

  constructor() { }

  addItem(data) {
    this.data.push(data);
  }

  getItem() {
    return this.data;
  }
}
