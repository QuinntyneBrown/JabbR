// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { inject, Injectable, OnDestroy } from '@angular/core';
import { IStreamSubscriber } from '@microsoft/signalr';
import { JabbRHubClientService } from 'core';
import { filter, from, Subject, switchMap, tap } from 'rxjs';

@Injectable()
export abstract class ChatComponent implements OnDestroy {

  protected readonly _destroyed = new Subject();

  protected readonly _jabbRHubClientService = inject(JabbRHubClientService)

  constructor(protected readonly _name:string = '') { }

  public get messages$() {
    return from(this._jabbRHubClientService.connect()).pipe(
      switchMap(_ => from(this._jabbRHubClientService.addToGroup(this._name))),
      switchMap(_ => this._jabbRHubClientService.message$),
      filter(x => x.MessageType == this._name)
    )
  }

  ngOnDestroy(): void {
    this._jabbRHubClientService.removeFromGroup(this._name);
    this._destroyed.next(null);
    this._destroyed.complete();
  }
}

class f extends Subject<any> implements IStreamSubscriber<any> {
  

}