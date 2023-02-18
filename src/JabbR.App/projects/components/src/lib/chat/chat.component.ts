// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { ChangeDetectionStrategy, Component, inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushModule } from '@ngrx/component';
import { JabbRHubClientService } from 'core';
import { filter, of, switchMap } from 'rxjs';

@Injectable()
export abstract class ChatComponent implements OnDestroy {

  private readonly _jabbRHubClientService = inject(JabbRHubClientService)

  constructor(private readonly _name:string = '') { }

  public get messages$() {
    return of(this._jabbRHubClientService.connect()).pipe(
      switchMap(_ => of(this._jabbRHubClientService.addToGroup(this._name))),
      switchMap(_ => this._jabbRHubClientService.message$),
      filter(x => {
        return x == this._name;
      })
    )
  }

  ngOnDestroy(): void {
    this._jabbRHubClientService.removeFromGroup(this._name);
  }
}
