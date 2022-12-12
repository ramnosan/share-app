import { TestBed } from '@angular/core/testing';

import { EntgeldatlasService } from './entgeldatlas.service';

describe('EntgeldatlasService', () => {
  let service: EntgeldatlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntgeldatlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
