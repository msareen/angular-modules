import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLibComponent } from './vendor-lib.component';

describe('VendorLibComponent', () => {
  let component: VendorLibComponent;
  let fixture: ComponentFixture<VendorLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
