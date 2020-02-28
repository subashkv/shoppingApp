import { Component, OnInit } from '@angular/core';
import { offices } from './offices'

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  officeDetails = offices;
  locations: string[] = ["Trivandrum", "Bangalore", "Cochin"];
  selectedOffices =[];

  constructor() { }

  ngOnInit(): void {
  }

  showOfficeDetails(value){
    this.selectedOffices = this.officeDetails.filter(x => x.location == value);
  }

}
