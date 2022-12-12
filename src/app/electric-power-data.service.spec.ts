import { TestBed } from '@angular/core/testing';

import { ElectricPowerDataService } from './electric-power-data.service';

describe('ElectricPowerDataService', () => {
  let service: ElectricPowerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricPowerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
