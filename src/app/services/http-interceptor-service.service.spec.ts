import { TestBed } from '@angular/core/testing';

import { HttpInterceptorServiceService } from './http-interceptor-service.service';

describe('HtppInterceptorServiceService', () => {
  let service: HttpInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
