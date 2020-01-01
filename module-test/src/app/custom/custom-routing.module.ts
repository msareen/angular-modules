import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPageComponent } from '../custom-page/custom-page.component';

const routes: Routes = [
  {
    path: 'customPage',
    component: CustomPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomRoutingModule { }
