// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

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

    // ARRANGE
    // ARRANGE


