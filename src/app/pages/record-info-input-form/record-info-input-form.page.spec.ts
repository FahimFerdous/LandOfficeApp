import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordInfoInputFormPage } from './record-info-input-form.page';

describe('RecordInfoInputFormPage', () => {
  let component: RecordInfoInputFormPage;
  let fixture: ComponentFixture<RecordInfoInputFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordInfoInputFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordInfoInputFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
