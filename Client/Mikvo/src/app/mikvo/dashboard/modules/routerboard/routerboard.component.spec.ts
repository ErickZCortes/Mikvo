import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterboardComponent } from './routerboard.component';

describe('RouterboardComponent', () => {
  let component: RouterboardComponent;
  let fixture: ComponentFixture<RouterboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
