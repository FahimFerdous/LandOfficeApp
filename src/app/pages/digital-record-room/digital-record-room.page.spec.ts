import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalRecordRoomPage } from './digital-record-room.page';

describe('DigitalRecordRoomPage', () => {
  let component: DigitalRecordRoomPage;
  let fixture: ComponentFixture<DigitalRecordRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalRecordRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalRecordRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
