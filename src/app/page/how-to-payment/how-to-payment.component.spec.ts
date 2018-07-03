import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPaymentComponent } from './how-to-payment.component';

describe('HowToPaymentComponent', () => {
  let component: HowToPaymentComponent;
  let fixture: ComponentFixture<HowToPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
