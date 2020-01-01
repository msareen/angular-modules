import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-vendor-lib',
  template: `
    <p>
      vendor-lib works!
    </p>
  `,
  styles: []
})
export class VendorLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
