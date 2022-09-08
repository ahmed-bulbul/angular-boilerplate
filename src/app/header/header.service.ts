import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/services/login.services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public baseUrl = environment.baseUrl;

  isLoadingSubject: BehaviorSubject<boolean>;
  isLoadingSubject$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoadingSubject$ = this.isLoadingSubject.asObservable();
  }

  getDataFromJson(section) {
    return this.http.get(`assets/json/${section}.json`);
  }

}
