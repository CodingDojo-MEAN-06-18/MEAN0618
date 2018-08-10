import { TestBed, inject } from '@angular/core/testing';

import { NumServiceService } from './num-service.service';

describe('NumServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumServiceService]
    });
  });

  it('should be created', inject([NumServiceService], (service: NumServiceService) => {
    expect(service).toBeTruthy();
  }));
});
