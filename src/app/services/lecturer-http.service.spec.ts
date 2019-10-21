import { TestBed } from '@angular/core/testing';

import { LecturerHttpService } from './lecturer-http.service';

describe('LecturerHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecturerHttpService = TestBed.get(LecturerHttpService);
    expect(service).toBeTruthy();
  });
});
