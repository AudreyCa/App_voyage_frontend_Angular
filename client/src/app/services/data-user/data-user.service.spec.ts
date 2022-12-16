import { TestBed } from '@angular/core/testing';

import { DataUserService } from './data-user.service';

describe('DataService', () => {
  let service: DataUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
