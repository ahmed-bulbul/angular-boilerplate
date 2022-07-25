import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LocalstorageService } from '../service/localstorage.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private localstorageService: LocalstorageService,private toastrService:ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(this.localstorageService.isLoggedIn()){
      return true;
    }else{
      //sweet alert
      Swal.fire({
        title: 'Oops...',
        text: 'You are not logged in!',
      })
      // go to login page
      this.localstorageService.logout();
      return false;
    }
  }
}
