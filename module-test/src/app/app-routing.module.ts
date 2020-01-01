import { NgModule, isDevMode } from '@angular/core';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'customMe',
    loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor-lib-wrapper.module').then(m => m.VendorLibWrapperModule)
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
