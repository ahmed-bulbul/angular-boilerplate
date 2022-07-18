import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public baseUrl = environment.baseUrl;
  public salesData:any=[];

  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.getSales();


  }

  //call api
  getSales() {

    this.http.get(this.baseUrl + '/api/v1/sales/getAll').subscribe((res:any) => {
      this.salesData = res.data;
      console.log(this.salesData);
    });



  }

}
