import { Component, OnInit } from '@angular/core';
import { LazyLoaderService } from './lazy-loader-service';
import { Links } from './interfaces/links';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'module-test';

  links:Links[]
  
  constructor(private lazyLoaderService: LazyLoaderService,
    private dataService: DataService) {
    
  }

  ngOnInit() {
    this.dataService.getLinks().subscribe((links:Links[]) => {
      this.links = links;
    })
  }
}
