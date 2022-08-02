import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }



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
