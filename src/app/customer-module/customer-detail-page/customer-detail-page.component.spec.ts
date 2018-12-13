import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailPageComponent } from './customer-detail-page.component';
import { SdUiModule } from '@sdworx/sd-components';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerDetailPageComponent', () => {
  let component: CustomerDetailPageComponent;
  let fixture: ComponentFixture<CustomerDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailPageComponent /*, CustomerDetailComponent*/],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        SdUiModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
