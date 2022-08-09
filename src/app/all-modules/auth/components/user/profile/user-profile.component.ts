
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userProfile: any;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private authService: AuthService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) { }

  ngOnInit(): void {

    this.getUserProfile();

  }

  getUserProfile() {
    this.authService.getUserProfile(this.localstorageService.getUser().id).subscribe((res: any) => {
      if (res.status === true) {
        this.userProfile = res.data;
        console.log(this.userProfile);
      }
    }, err => {
      console.log(err);
      Swal.fire({ title: 'Error', text: err.message, icon: 'error' });
    }
    );
  }


}
