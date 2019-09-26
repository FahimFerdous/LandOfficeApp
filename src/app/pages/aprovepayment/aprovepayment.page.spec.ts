import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovepaymentPage } from './aprovepayment.page';

describe('AprovepaymentPage', () => {
  let component: AprovepaymentPage;
  let fixture: ComponentFixture<AprovepaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovepaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovepaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
