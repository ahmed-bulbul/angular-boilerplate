import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/shared';

  //define api endpoints
  private apiEndpoints = {
    getAll: this.baseUrl + '/getAll',
    getById: this.baseUrl + '/get',
    create: this.baseUrl + '/create',
    update: this.baseUrl + '/update',
    delete: this.baseUrl + '/delete',
  }

  private authModuleApiUrl = this.baseUrl + '/authModule';
  private baseModuleApiUrl = this.baseUrl + '/baseModule';
  private systemModuleApiUrl = this.baseUrl + '/systemModule';


  constructor(private http: HttpClient) {

   }


  public sendGetRequest(apiURL, queryParams){
    console.log('@sendGetRequest');
    return this.http.get<any>(apiURL, {params: queryParams});
  }

  public sendPostRequest(apiURL, formData){
    console.log('@sendPostRequest');
    return this.http.post(apiURL, formData);
  }

  public sendPutRequest(apiURL, formData){
    console.log('@sendPutRequest');
    return this.http.put(apiURL, formData);
  }

  public sendDeleteRequest(apiURL, formData){
    console.log('@sendDeleteRequest');
    return this.http.delete(apiURL, formData);

  }

  //get role
  public getRole(queryParams): Observable<any> {
    return this.http.get<any>(this.authModuleApiUrl+'/getRole', {params: queryParams});
  }

  //get entityAuth
  public getEntityAuthByAuthority(authority,queryParams): Observable<any> {
    return this.http.get<any>(this.systemModuleApiUrl+'/getEntityAuth/'+authority, {params: queryParams});
  }

  //get requestAuth
  public getRequestAuth(authority,queryParams): Observable<any> {
    return this.http.get<any>(this.authModuleApiUrl+'/getRequestAuth/'+authority, {params: queryParams});
  }

  //get module
  public getModule(queryParams): Observable<any> {
    return this.http.get<any>(this.baseModuleApiUrl+'/getModule', {params: queryParams});
  }
}
