import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OfficeComponent } from './office/office.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddtdproductComponent } from './addtdproduct/addtdproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddrfproductComponent } from './addrfproduct/addrfproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { FinalorderComponent } from './finalorder/finalorder.component';
import { ViewordersComponent } from './vieworders/vieworders.component';


const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "mobiles", component: MobilesComponent },
  { path: "office", component: OfficeComponent },
  {
    path: "addproduct", component: AddproductComponent,
    children: [
      { path: "addproductT", component: AddtdproductComponent },
      { path: "addproductR", component: AddrfproductComponent }
    ]
  },
  { path: "productdetails", component: ProductdetailsComponent },
  { path: "update/:id", component: UpdateproductsComponent },
  { path: "customerdetails", component: CustomerdetailsComponent },
  { path: "finalorder/:id/:existing", component: FinalorderComponent},
  { path: "vieworders/:id", component: ViewordersComponent},
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
