import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/services/login.services';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,private loginService: LoginService) {
  }

  getDataFromJson(section) {
    return this.http.get(`assets/json/${section}.json`);
  }

}
