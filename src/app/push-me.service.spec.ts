import { TestBed } from '@angular/core/testing';

import { PushMeService } from './push-me.service';

describe('PushMeService', () => {
  let service: PushMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
