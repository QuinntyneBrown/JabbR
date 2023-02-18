// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JabbRHubClientService {

  private _hubConnection: HubConnection | undefined;

  private _connect: Promise<boolean> | undefined;
  
  public message$ = new Subject<string>();

  private readonly _baseUrl:string = 'https://localhost:7018/';

  public connect(): Promise<boolean> {
    
    if(this._connect) return this._connect;

    this._connect = new Promise(async (resolve,reject) => {

      const options: IHttpConnectionOptions = {                    
        logMessageContent: true               
      };
  
      this._hubConnection = new HubConnectionBuilder()
      .withUrl(`${this._baseUrl}hub`, options)
      .withAutomaticReconnect()
      .build(); 
  
      this._hubConnection.on("message", (message:string) => {
        this.message$.next(message);
      });
  
      await this._hubConnection.start();

      resolve(true);

    });

    return this._connect;
  }
}
