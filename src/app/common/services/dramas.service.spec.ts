import { TestBed, inject } from '@angular/core/testing';

import { DramasService } from './dramas.service';

describe('DramasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DramasService]
    });
  });

  it('should be created', inject([DramasService], (service: DramasService) => {
    expect(service).toBeTruthy();
  }));
});
