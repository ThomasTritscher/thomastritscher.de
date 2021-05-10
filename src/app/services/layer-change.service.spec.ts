import { TestBed } from '@angular/core/testing';

import { LayerChangeService } from './layer-change.service';

describe('LayerChangeService', () => {
  let service: LayerChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
