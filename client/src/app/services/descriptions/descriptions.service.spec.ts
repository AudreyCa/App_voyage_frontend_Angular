import { TestBed } from '@angular/core/testing';

import { DescriptionsService } from './descriptions.service';

describe('DescriptionsService', () => {
  let service: DescriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
