import { TestBed } from '@angular/core/testing';

import { DbzService } from 'src/app/dbz/components/services/dbz.service';

describe('DbzService', () => {
  let service: DbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[DbzService]
    });
    service = TestBed.inject(DbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
