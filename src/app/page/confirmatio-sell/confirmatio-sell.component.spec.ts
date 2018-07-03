import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatioSellComponent } from './confirmatio-sell.component';

describe('ConfirmatioSellComponent', () => {
  let component: ConfirmatioSellComponent;
  let fixture: ComponentFixture<ConfirmatioSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmatioSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatioSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
