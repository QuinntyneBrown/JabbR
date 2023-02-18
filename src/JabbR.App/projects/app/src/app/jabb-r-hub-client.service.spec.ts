import { TestBed } from '@angular/core/testing';

import { JabbRHubClientService } from './jabb-r-hub-client.service';

describe('JabbRHubClientService', () => {
  let service: JabbRHubClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JabbRHubClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
