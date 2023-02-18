import { TestBed } from '@angular/core/testing';

import { JabbRHubConnectionGuard } from './jabb-r-hub-connection.guard';

describe('JabbRHubConnectionGuard', () => {
  let guard: JabbRHubConnectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JabbRHubConnectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
