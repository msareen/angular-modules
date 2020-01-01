import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorLibModule, VendorLibComponent, VendorPageNewComponent } from 'vendor-lib';



@NgModule({
  declarations: [],
  imports: [
    VendorLibModule
  ],
  exports:[
    VendorLibModule
  ],
  entryComponents: [
    VendorLibComponent,
    VendorPageNewComponent
  ]
})
export class VendorLibWrapperModule { }
