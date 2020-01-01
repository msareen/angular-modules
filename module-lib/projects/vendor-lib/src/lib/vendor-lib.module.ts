import { NgModule } from '@angular/core';
import { VendorLibComponent } from './vendor-lib.component';
import { VendorLibRoutingModule } from './vendor-lib-routing.module';



@NgModule({
  declarations: [VendorLibComponent],
  imports: [
    VendorLibRoutingModule
  ],
  exports: [
    VendorLibComponent,
    VendorLibRoutingModule
  ]
})
export class VendorLibModule { }
