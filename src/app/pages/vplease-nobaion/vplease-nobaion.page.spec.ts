import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPleaseNobaionPage } from './vplease-nobaion.page';

describe('VPleaseNobaionPage', () => {
  let component: VPleaseNobaionPage;
  let fixture: ComponentFixture<VPleaseNobaionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPleaseNobaionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPleaseNobaionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
