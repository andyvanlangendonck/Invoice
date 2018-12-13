import { Component, OnInit, Inject } from '@angular/core';
//import { TOASTR_TOKEN, Toastr } from '../../common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr) { }
  constructor(){}

  ngOnInit() {
  }

  save() {
    //console.log('profile save');
    //this.toastr.success('Profile Saved');

  }
}
