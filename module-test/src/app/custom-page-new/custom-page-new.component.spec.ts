import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageNewComponent } from './custom-page-new.component';

describe('CustomPageNewComponent', () => {
  let component: CustomPageNewComponent;
  let fixture: ComponentFixture<CustomPageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
