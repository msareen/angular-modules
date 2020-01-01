import { NgModule, isDevMode } from '@angular/core';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { VendorLibModule } from 'vendor-lib';



const routes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'customMe',
    loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('vendor-lib').then(m => m.VendorLibModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 
  
}
