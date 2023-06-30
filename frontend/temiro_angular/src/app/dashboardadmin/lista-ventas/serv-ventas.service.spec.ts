import { TestBed } from '@angular/core/testing';

import { ServVentasService } from './serv-ventas.service';

describe('ServVentasService', () => {
  let service: ServVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
