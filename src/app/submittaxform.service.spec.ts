import { TestBed } from '@angular/core/testing';

import { SubmittaxformService } from './submittaxform.service';

describe('SubmittaxformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmittaxformService = TestBed.get(SubmittaxformService);
    expect(service).toBeTruthy();
  });
});
