import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourosovaEntryFormPage } from './pourosova-entry-form.page';

describe('PourosovaEntryFormPage', () => {
  let component: PourosovaEntryFormPage;
  let fixture: ComponentFixture<PourosovaEntryFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourosovaEntryFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourosovaEntryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
