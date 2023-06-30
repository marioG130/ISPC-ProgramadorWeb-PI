import { TestBed } from '@angular/core/testing';

import { ServClientesService } from './serv-clientes.service';

describe('ServClientesService', () => {
  let service: ServClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
