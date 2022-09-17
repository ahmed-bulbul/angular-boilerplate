import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api';

  //define api endpoints for base service
  private apiBaseEndpoints = {
    getAll: this.baseUrl + '/module/getAll',
    getById: this.baseUrl + '/module/get',
    create: this.baseUrl + '/module/create',
    update: this.baseUrl + '/module/update',
    delete: this.baseUrl + '/module/delete',
  }

  // define appi url for org service
  private apiOrgEndpoints = {
    getAll: this.baseUrl + '/org/getAll',
    getById: this.baseUrl + '/org/get',
    create: this.baseUrl + '/org/create',
    update: this.baseUrl + '/org/update',
    delete: this.baseUrl + '/org/delete',
  }

  //define api for ou service
  private apiOuEndpoints = {
    getAll: this.baseUrl + '/ou/getAll',
    getById: this.baseUrl + '/ou/get',
    create: this.baseUrl + '/ou/create',
    update: this.baseUrl + '/ou/update',
    delete: this.baseUrl + '/ou/delete',
  }


  constructor(private httpClient: HttpClient) { }
}
