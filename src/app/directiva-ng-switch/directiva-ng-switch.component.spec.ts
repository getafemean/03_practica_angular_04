import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgSwitchComponent } from './directiva-ng-switch.component';

describe('DirectivaNgSwitchComponent', () => {
  let component: DirectivaNgSwitchComponent;
  let fixture: ComponentFixture<DirectivaNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
