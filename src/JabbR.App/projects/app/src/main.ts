// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { JabbRHubConnectionGuard } from './app/jabb-r-hub-connection.guard';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', loadComponent: () => import('./app/jabb-r/jabb-r.component').then(m => m.JabbRComponent), canActivate: [JabbRHubConnectionGuard]}
      ]),     
    )
  ]
}).catch((err) => console.error(err));
