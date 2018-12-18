import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealvoucherBlockTagComponent } from './mealvoucher-block-tag.component';

describe('MealvoucherBlockTagComponent', () => {
  let component: MealvoucherBlockTagComponent;
  let fixture: ComponentFixture<MealvoucherBlockTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealvoucherBlockTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealvoucherBlockTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
