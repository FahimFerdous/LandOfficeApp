import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentprocedurePage } from './paymentprocedure.page';

describe('PaymentprocedurePage', () => {
  let component: PaymentprocedurePage;
  let fixture: ComponentFixture<PaymentprocedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentprocedurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentprocedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
