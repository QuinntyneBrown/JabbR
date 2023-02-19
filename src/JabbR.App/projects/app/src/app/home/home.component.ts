// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createHomeViewModel } from './create-home-view-model';
import { PushModule } from '@ngrx/component';
import { ChatComponent } from 'components';
import { filter, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PushModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ChatComponent {
  constructor() {    
    super("Home")    
  }

  public vm$ = of([] as any[]).pipe(
    switchMap(messages => {
      return this.messages$.pipe(
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
