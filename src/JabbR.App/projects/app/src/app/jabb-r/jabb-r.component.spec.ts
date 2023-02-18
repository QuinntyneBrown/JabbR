import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JabbRComponent } from './jabb-r.component';

describe('JabbRComponent', () => {
  let component: JabbRComponent;
  let fixture: ComponentFixture<JabbRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JabbRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JabbRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
