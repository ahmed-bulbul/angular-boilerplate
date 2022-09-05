import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/v1/baseModule';

  isLoadingSubject: BehaviorSubject<boolean>;
  isLoadingSubject$: Observable<boolean>;

  //define api endpoints
  private apiEndpoints = {
    getAll: this.baseUrl + '/getAll',
    getById: this.baseUrl + '/get',
    create: this.baseUrl + '/create',
    update: this.baseUrl + '/update',
    delete: this.baseUrl + '/delete',
  }


  constructor(private http: HttpClient) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoadingSubject$ = this.isLoadingSubject.asObservable();
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
}
