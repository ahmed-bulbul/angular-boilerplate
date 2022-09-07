import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/auth';

  // for requestAuth adding /requestAuth adding
  public requestAuthApiEndPoint = this.baseUrl+'/requestAuth';
  public userApiEndPoint = this.baseUrl+'/user';
  public roleApiEndpont = this.baseUrl+'/role';




  constructor(private httpClient: HttpClient) { }

  // create request auth
  createRequestAuth(payload: any) {
    return this.httpClient.post(this.requestAuthApiEndPoint+'/create', payload);
  }

  updateRequestAuth(payload: any) {
    return this.httpClient.put(this.requestAuthApiEndPoint+'/update', payload);
  }


  getUserProfile(id: number) {
    return this.httpClient.get(this.userApiEndPoint+'/get/'+id);
  }

  //create role
  createRole(payload: any) {
    return this.httpClient.post<Role>(this.roleApiEndpont+'/create', payload);
  }

  //get role
  getRoleList(queryParams) {
    return this.httpClient.get<Role>(this.roleApiEndpont+'/getAll', {params: queryParams});
  }

  //delete role
  deleteRole(id: number) {
    return this.httpClient.delete(this.roleApiEndpont+'/delete/'+id);
  }


}
