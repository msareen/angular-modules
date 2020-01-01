import { Component } from '@angular/core';
import { LazyLoaderService } from './lazy-loader-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module-test';

  constructor(private lazyLoaderService: LazyLoaderService) {
    // this.lazyLoaderService.loadModule(() => {
    //   return fetch("./src-app-custom-custom-module-ts-ngfactory-es2015.js");
    // })
  }
}
