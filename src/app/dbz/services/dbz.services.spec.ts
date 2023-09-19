import { TestBed } from '@angular/core/testing';

import { DbzServices } from './dbz.service';

describe('DbzServicesTsService', () => {
  let service: DbzServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
