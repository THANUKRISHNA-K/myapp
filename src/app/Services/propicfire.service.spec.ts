import { TestBed } from '@angular/core/testing';

import { PropicfireService } from './propicfire.service';

describe('PropicfireService', () => {
  let service: PropicfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropicfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
