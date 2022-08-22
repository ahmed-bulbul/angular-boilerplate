import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SystemMenu } from '../model/SystemMenu.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

   //base url for the api
   public baseUrl = environment.baseUrl + '/api/v1/system/systemMenu';

   constructor(private httpClient: HttpClient) { }

   createSystemMenu(formData: SystemMenu): Observable<Object>{
     return this.httpClient.post(`${this.baseUrl}`+'/create', formData);
   }

   getMenuList(queryparams): Observable<Object>{
     return this.httpClient.get(`${this.baseUrl}`+'/getAll',{params: queryparams});
   }

   // delete systemMenu by id
    deleteSystemMenu(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}`+'/delete/'+id);
    }
}
