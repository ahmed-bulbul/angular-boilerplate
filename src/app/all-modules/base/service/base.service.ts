import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/baseModule';

  //define api endpoints
  private apiEndpoints = {
    getAll: this.baseUrl + '/getAll',
    getById: this.baseUrl + '/get',
    create: this.baseUrl + '/create',
    update: this.baseUrl + '/update',
    delete: this.baseUrl + '/delete',
  }


  constructor(private httpClient: HttpClient) { }
}
