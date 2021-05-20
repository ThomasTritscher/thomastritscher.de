import { TestBed } from '@angular/core/testing';

import { TransitionBgService } from './transition-bg.service';

describe('TransitionBgService', () => {
  let service: TransitionBgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionBgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
