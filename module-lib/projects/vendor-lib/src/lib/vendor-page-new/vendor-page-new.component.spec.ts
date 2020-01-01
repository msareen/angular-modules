import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPageNewComponent } from './vendor-page-new.component';

describe('VendorPageNewComponent', () => {
  let component: VendorPageNewComponent;
  let fixture: ComponentFixture<VendorPageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
