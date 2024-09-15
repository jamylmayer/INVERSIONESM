import { TestBed } from '@angular/core/testing';

import { ApisperuService } from './apisperu.service';

describe('ApisperuService', () => {
  let service: ApisperuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisperuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
