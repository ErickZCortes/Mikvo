import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikvoComponent } from './mikvo.component';

describe('MikvoComponent', () => {
  let component: MikvoComponent;
  let fixture: ComponentFixture<MikvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
