import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignvoucherComponent } from './designvoucher.component';

describe('DesignvoucherComponent', () => {
  let component: DesignvoucherComponent;
  let fixture: ComponentFixture<DesignvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
