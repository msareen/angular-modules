import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRoutingModule } from './custom-routing.module';
import { CustomPageComponent } from '../custom-page/custom-page.component';



@NgModule({
  declarations: [CustomPageComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ]
})
export class CustomModule { }
