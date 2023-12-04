import { TestBed } from '@angular/core/testing';

import { AnimePredictionServiceService } from './anime-prediction-service.service';

describe('AnimePredictionServiceService', () => {
  let service: AnimePredictionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimePredictionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
