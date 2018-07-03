import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatioSellDetailComponent } from './confirmatio-sell-detail.component';

describe('ConfirmatioSellDetailComponent', () => {
  let component: ConfirmatioSellDetailComponent;
  let fixture: ComponentFixture<ConfirmatioSellDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmatioSellDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatioSellDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
