import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovepaymentListPage } from './aprovepayment-list.page';

describe('AprovepaymentListPage', () => {
  let component: AprovepaymentListPage;
  let fixture: ComponentFixture<AprovepaymentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovepaymentListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovepaymentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
