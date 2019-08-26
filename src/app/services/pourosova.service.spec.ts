import { TestBed } from '@angular/core/testing';

import { PourosovaService } from './pourosova.service';

describe('PourosovaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PourosovaService = TestBed.get(PourosovaService);
    expect(service).toBeTruthy();
  });
});
