import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylicenceholderinfoPage } from './displaylicenceholderinfo.page';

describe('DisplaylicenceholderinfoPage', () => {
  let component: DisplaylicenceholderinfoPage;
  let fixture: ComponentFixture<DisplaylicenceholderinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaylicenceholderinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylicenceholderinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
