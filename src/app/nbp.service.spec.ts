import { TestBed } from '@angular/core/testing';

import { NbpHttpService } from './nbp.service';

describe('NbpService', () => {
  let service: NbpHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbpHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
