import { TestBed } from '@angular/core/testing';

import { OauthloginService } from './oauthlogin.service';

describe('OauthloginService', () => {
  let service: OauthloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
