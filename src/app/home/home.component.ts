import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  // showAddCustomer() {
  //   this.activeModal = this.modalService.open(AddCustomerModalComponent); // , { size: 'lg' });
  //   from(this.activeModal.result)
  //     .pipe(map(r => (r as Application)))
  //     .subscribe(app => this.newApplication.emit(app));

  // }
}
