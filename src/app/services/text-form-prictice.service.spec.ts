import { TestBed } from '@angular/core/testing';

import { TextFormPricticeService } from './text-form-prictice.service';

describe('TextFormPricticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextFormPricticeService = TestBed.get(TextFormPricticeService);
    expect(service).toBeTruthy();
  });
});
