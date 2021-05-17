import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgClassComponent } from './directiva-ng-class.component';

describe('DirectivaNgClassComponent', () => {
  let component: DirectivaNgClassComponent;
  let fixture: ComponentFixture<DirectivaNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
