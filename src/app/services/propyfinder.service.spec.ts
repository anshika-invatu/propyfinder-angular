import { TestBed } from '@angular/core/testing';

import { PropyfinderService } from './propyfinder.service';

describe('PropyfinderService', () => {
  let service: PropyfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropyfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
