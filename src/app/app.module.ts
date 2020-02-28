import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OfficeComponent } from './office/office.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavComponent } from './nav/nav.component';
import { DataService } from './data.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddtdproductComponent } from './addtdproduct/addtdproduct.component';
import { AddrfproductComponent } from './addrfproduct/addrfproduct.component';
import { HttpClientModule } from "@angular/common/http"
import { ProductService } from './product.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { OrderService } from './order.service';
import { CustomerService } from './customer.service';
import { TaxPipe } from './tax.pipe';
import { ViewordersComponent } from './vieworders/vieworders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MobilesComponent,
    OfficeComponent,
    PagenotfoundComponent,
    NavComponent,
    AddproductComponent,
    AddtdproductComponent,
    AddrfproductComponent,
    ProductdetailsComponent,
    UpdateproductsComponent,
    CustomerdetailsComponent,
    FinalorderComponent,
    TaxPipe,
    ViewordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, ProductService, OrderService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
