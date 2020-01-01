import { TestBed } from '@angular/core/testing';

import { VendorLibService } from './vendor-lib.service';

describe('VendorLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorLibService = TestBed.get(VendorLibService);
    expect(service).toBeTruthy();
  });
});
