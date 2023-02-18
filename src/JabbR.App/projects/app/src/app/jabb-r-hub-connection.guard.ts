// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JabbRHubClientService } from './jabb-r-hub-client.service';

@Injectable({
  providedIn: 'root'
})
export class JabbRHubConnectionGuard implements CanActivate {

  constructor(
    private readonly _jabbRHubClientService: JabbRHubClientService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._jabbRHubClientService.connect();
  }
}
