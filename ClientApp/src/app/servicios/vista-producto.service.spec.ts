import { TestBed } from '@angular/core/testing';

import { VistaProductoService } from './vista-producto.service';

describe('VistaProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VistaProductoService = TestBed.get(VistaProductoService);
    expect(service).toBeTruthy();
  });
});
