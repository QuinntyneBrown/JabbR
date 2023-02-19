// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.


import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions } from '@microsoft/signalr';
import { Subject } from 'rxjs';


export class JabbRHubClientService {

  private _connect: Promise<boolean> | undefined;
  
  public readonly message$ = new Subject<any>();

  private _groupMembership: { [groupName: string] : number; } = {};

  public static create(baseUrl:string) {

    const options: IHttpConnectionOptions = {                    
      logMessageContent: true               
    };
  
    const hubConnection = new HubConnectionBuilder()
    .withUrl(`${baseUrl}hub`, options)
    .withAutomaticReconnect()
    .build(); 
  
    return new JabbRHubClientService(hubConnection);
  }

  constructor(
    private readonly _hubConnection: HubConnection
  ) { }

  public async removeFromGroup(groupName:string): Promise<void> {
    const numberOfMembers = this._groupMembership[groupName];
    if(numberOfMembers == 1) {
      await this._hubConnection?.invoke("removeFromGroup", groupName);
    }
    this._groupMembership[groupName] = numberOfMembers - 1;
    
  }

  public async addToGroup(groupName:string):Promise<void> {
    const numberOfMembers = this._groupMembership[groupName];
    if(!numberOfMembers) {
      await this._hubConnection?.invoke("addToGroup", groupName);
      this._groupMembership[groupName] = 1;
    } else {
      this._groupMembership[groupName] = numberOfMembers + 1;
    }
  }

  public async onreconnected() {
    Object.keys(this._groupMembership).forEach(async groupName => {
      const numberOfMembers = this._groupMembership[groupName];
      if(numberOfMembers > 0) {
        this._hubConnection?.invoke("addToGroup", groupName);
      }
    })
  }

  public onmessage(message:string) {
    const json = JSON.parse(message);
    this.message$.next(json);
  }

  public async connect(): Promise<boolean> {
    
    if(this._connect) return this._connect;

    this._connect = new Promise(async (resolve, _) => {
      this._hubConnection.on("message", (message:string) => this.onmessage(message));
      this._hubConnection.onreconnected(() => this.onreconnected());
      await this._hubConnection.start();
      resolve(true);
    });

    return this._connect;
  }
}
