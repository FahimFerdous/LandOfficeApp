import { TestBed } from '@angular/core/testing';

import { AddempinfoService } from './addempinfo.service';

describe('AddempinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddempinfoService = TestBed.get(AddempinfoService);
    expect(service).toBeTruthy();
  });
});
