// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createTechViewModel } from './create-tech-view-model';
import { PushModule } from '@ngrx/component';
import { ChatComponent } from 'components';
import { map } from 'rxjs';

@Component({
  selector: 'app-tech',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PushModule],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent extends ChatComponent {

  constructor() {
    super("Tech");    
  }
  public vm$ = this.messages$.pipe(
    map(message => ({ message }))
  )
}
