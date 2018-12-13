import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AddCustomerModalComponent } from './add-customer-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbModule,
  NgbModal,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import Customer from '../customer';

describe('Add customer modal component', () => {
  let fixture: ComponentFixture<AddCustomerModalComponent>;
  let component: AddCustomerModalComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomerModalComponent],
      imports: [ReactiveFormsModule],
      providers: [NgbModal, NgbActiveModal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).not.toBeNull();
    expect(component).toBeTruthy();
  });

  it('should emit the new contact', () => {
    const expected: Customer = {
      Name: 'John Doe',
      Address: 'Rue de la test',
      Telephone: '027778899'
    };

    spyOn(component.newCustomer, 'emit');
    component.customerForm.setValue({
      Name: expected.Name,
      Address: expected.Address,
      Telephone: expected.Telephone
    });
    component.submitCustomer();

    expect(component.newCustomer.emit).toHaveBeenCalledWith(expected);
  });
});
