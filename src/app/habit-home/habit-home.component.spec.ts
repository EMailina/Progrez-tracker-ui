import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitHomeComponent } from './habit-home.component';

describe('HabitHomeComponent', () => {
  let component: HabitHomeComponent;
  let fixture: ComponentFixture<HabitHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
