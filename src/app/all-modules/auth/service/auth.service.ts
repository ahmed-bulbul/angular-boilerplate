import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/devTools';


  constructor(private httpClient: HttpClient) { }
}
