// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JabbRHubClientService } from '../jabb-r-hub-client.service';
import { map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-jabb-r',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jabb-r.component.html',
  styleUrls: ['./jabb-r.component.scss']
})
export class JabbRComponent {
  constructor(
    private readonly _jabbRHubClientService: JabbRHubClientService
  ) { }

  public vm$ = of([] as string[]).pipe(
    switchMap(messages => {
      return this._jabbRHubClientService.message$.pipe(
        map(message => {
          messages = [message, ...messages];
          return {
            messages
          };
        })
      )
    })
  )
}
