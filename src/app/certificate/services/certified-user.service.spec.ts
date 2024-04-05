import { TestBed } from '@angular/core/testing';

import { CertifiedUserService } from './certified-user.service';

describe('CertifiedUserService', () => {
  let service: CertifiedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifiedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
