import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealVoucherBlockComponent } from './mealvoucher-block.component';

describe('MealvoucherFileComponent', () => {
  let component: MealVoucherBlockComponent;
  let fixture: ComponentFixture<MealVoucherBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealVoucherBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealVoucherBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
