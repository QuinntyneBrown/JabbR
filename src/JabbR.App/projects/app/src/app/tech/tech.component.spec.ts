// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

    // Test ID

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech.component';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

    // ARRANGE
    // ACT
    // ASSERT

