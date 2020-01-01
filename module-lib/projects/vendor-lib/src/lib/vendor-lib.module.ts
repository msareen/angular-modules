import { NgModule } from '@angular/core';
import { VendorLibComponent } from './vendor-lib.component';
import { VendorLibRoutingModule } from './vendor-lib-routing.module';
import { VendorPageNewComponent } from './vendor-page-new/vendor-page-new.component';



@NgModule({
  declarations: [VendorLibComponent, VendorPageNewComponent],
  imports: [
    VendorLibRoutingModule
  ],
  exports: [
    VendorLibComponent,
    VendorLibRoutingModule,
    VendorPageNewComponent
  ]
})
export class VendorLibModule { }
