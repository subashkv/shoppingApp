import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingMallTitle:string = "sKart"
  shoppingMallLogo:string = "../../assets/shopping.jpg"
  height:number =100
  width:number = 150
  
  constructor() { }

  ngOnInit(): void {
  }

}
