import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { SdUiModule } from '@sdworx/sd-components';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      imports: [SdUiModule.forRoot(), RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all the items in the customer collection', () => {
    component.customers = [
      { Id: 1, Address: 'bla', Name: 'John Doe', Telephone: '037778899' },
      { Id: 2, Address: 'bla', Name: 'John Doe', Telephone: '037778899' },
      { Id: 3, Address: 'bla', Name: 'John Doe', Telephone: '037778899' }
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('sd-card').length).toBe(
      component.customers.length
    );
  });
});
