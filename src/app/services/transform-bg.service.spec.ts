import { TestBed } from '@angular/core/testing';

import { TransformBGService } from './transform-bg.service';

describe('TransformBGService', () => {
  let service: TransformBGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformBGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
