import { TestBed } from '@angular/core/testing';

import { EmployeeUtilityService } from './employee-utility.service';

describe('EmployeeUtilityService', () => {
  let service: EmployeeUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
