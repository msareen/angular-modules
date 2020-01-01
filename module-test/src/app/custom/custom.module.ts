import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRoutingModule } from './custom-routing.module';
import { CustomPageComponent } from '../custom-page/custom-page.component';
import { CustomPageNewComponent } from '../custom-page-new/custom-page-new.component';



@NgModule({
  declarations: [CustomPageComponent, CustomPageNewComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ]
})
export class CustomModule { }
