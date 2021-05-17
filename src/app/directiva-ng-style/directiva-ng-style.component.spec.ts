import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgStyleComponent } from './directiva-ng-style.component';

describe('DirectivaNgStyleComponent', () => {
  let component: DirectivaNgStyleComponent;
  let fixture: ComponentFixture<DirectivaNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
