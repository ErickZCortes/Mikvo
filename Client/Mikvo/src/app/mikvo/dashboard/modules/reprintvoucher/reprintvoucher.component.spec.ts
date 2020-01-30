import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintvoucherComponent } from './reprintvoucher.component';

describe('ReprintvoucherComponent', () => {
  let component: ReprintvoucherComponent;
  let fixture: ComponentFixture<ReprintvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprintvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprintvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
