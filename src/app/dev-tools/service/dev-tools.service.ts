import { DevToolsModel } from './../model/devtools.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevToolsService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/devTools';

  constructor(private httpClient: HttpClient) { }

  createDevTools(formData: DevToolsModel): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+'/create', formData);
  }
}
