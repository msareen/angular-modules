import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorLibComponent } from './vendor-lib.component';

const routes: Routes = [{
  path: 'vendorPage',
  component: VendorLibComponent
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VendorLibRoutingModule { }
