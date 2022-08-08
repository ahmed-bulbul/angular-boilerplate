import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestAuthCreateDTO } from '../dto/RequestAuthCreateDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/requestAuth';


  constructor(private httpClient: HttpClient) { }

  // create request auth
  createRequestAuth(requestAuthCreateDTO: RequestAuthCreateDTO) {
    return this.httpClient.post(this.baseUrl+'/create', requestAuthCreateDTO);
  }

  

}
