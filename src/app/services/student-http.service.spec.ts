import { TestBed } from '@angular/core/testing';

import { StudentHttpService } from './student-http.service';

describe('StudentHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentHttpService = TestBed.get(StudentHttpService);
    expect(service).toBeTruthy();
  });
});
