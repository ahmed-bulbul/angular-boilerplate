import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperatingUnit } from '../model/OperatingUnit.model';
import { Organization } from '../model/Organization.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/base';

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
    getParentOrg: this.baseUrl + '/org/getParentOrg',
    uploadLogo : this.baseUrl + '/org/uploadLogo',
    getById: this.baseUrl + '/org/get',
    create: this.baseUrl + '/org/create',
    update: this.baseUrl + '/org/update',
    delete: this.baseUrl + '/org/delete',
  }

  //define api for ou service
  private apiOuEndpoints = {
    getAll: this.baseUrl + '/ou/getAll',
    getById: this.baseUrl + '/ou/get',
    getByOrgId: this.baseUrl + '/ou/getByOrgId',
    create: this.baseUrl + '/ou/create',
    update: this.baseUrl + '/ou/update',
    delete: this.baseUrl + '/ou/delete',
  }


  constructor(private httpClient: HttpClient) { }

  //get org list
  getAllOrg(queryParams) {
    return this.httpClient.get<Organization>(this.apiOrgEndpoints.getAll, {params: queryParams});
  }
  //create org
  createOrg(org: Organization) {
    return this.httpClient.post<Organization>(this.apiOrgEndpoints.create, org);
  }
  //get parent org list
  getParentOrg() {
    return this.httpClient.get<Organization>(this.apiOrgEndpoints.getParentOrg);
  }


  //update org
  updateOrg(org: Organization) {
    return this.httpClient.put<Organization>(this.apiOrgEndpoints.update, org);
  }

  //upload logo
  uploadLogo(formData: FormData, orgId: number) {
    return this.httpClient.put( this.apiOrgEndpoints.uploadLogo + '/'+orgId, formData);
  }

  //delete org
  deleteOrg(orgId: number) {
    return this.httpClient.delete(this.apiOrgEndpoints.delete+'/'+orgId);
  }

  //get org by id
  getOrgById(orgId: number) {
    return this.httpClient.get<Organization>(this.apiOrgEndpoints.getById+'/'+orgId);
  }

  //get ou by org id
  getOuByOrgId(orgId: number) {
    return this.httpClient.get<OperatingUnit>(this.apiOuEndpoints.getByOrgId+'/'+orgId);
  }
}
