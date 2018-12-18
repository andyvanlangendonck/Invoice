import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealvoucherTimeComponent } from './mealvoucher-time.component';

describe('MealvoucherTimeComponent', () => {
  let component: MealvoucherTimeComponent;
  let fixture: ComponentFixture<MealvoucherTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealvoucherTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealvoucherTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
