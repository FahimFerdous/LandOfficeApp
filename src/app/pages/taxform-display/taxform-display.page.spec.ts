import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxformDisplayPage } from './taxform-display.page';

describe('TaxformDisplayPage', () => {
  let component: TaxformDisplayPage;
  let fixture: ComponentFixture<TaxformDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxformDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxformDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
