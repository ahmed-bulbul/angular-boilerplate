import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestAuthCreateDTO } from '../dto/RequestAuthCreateDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1';

  // for requestAuth adding /requestAuth adding
  public requestAuthApiEndPoint = this.baseUrl+'/requestAuth';
  public userApiEndPoint = this.baseUrl+'/user';




  constructor(private httpClient: HttpClient) { }

  // create request auth
  createRequestAuth(payload: any) {
    console.log(payload);
    return this.httpClient.post(this.requestAuthApiEndPoint+'/create', payload);
  }

  getUserProfile(id: number) {
    return this.httpClient.get(this.userApiEndPoint+'/get/'+id);
  }



}
