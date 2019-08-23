import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInputPagePage } from './dropdown-input-page.page';

describe('DropdownInputPagePage', () => {
  let component: DropdownInputPagePage;
  let fixture: ComponentFixture<DropdownInputPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownInputPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownInputPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
