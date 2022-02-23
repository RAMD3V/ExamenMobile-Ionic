import { TestBed } from '@angular/core/testing';

import { ServicemusicaService } from './servicemusica.service';

describe('ServicemusicaService', () => {
  let service: ServicemusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
