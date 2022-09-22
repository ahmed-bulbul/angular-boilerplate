import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from 'src/app/header/header.service';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import Swal from 'sweetalert2';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

declare const $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public user : User[];
  public singleUser : User;

  public pipe = new DatePipe('en-US');
  public myFromGroup: FormGroup;

  public configPgn: any;
  public editId: any;
  public tempId: any;

  //search data
  private username: string;
  private active: boolean;
  private orgId:number;

  //search button click flag
  public searchClick: boolean = false;

    //search data
    private phone: string;
    private email: string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private authService: AuthService,
    private sharedService: SharedService,
    private headerService : HeaderService,
    private localStorageService : LocalstorageService
  ) {
    this.configPgn = {
      // my props
      pageNum: 1,
      pageSize: 10,
      totalItem: 50,
      pageSizes: [3, 5, 10, 25, 50, 100, 200, 500, 1000],
      pgnDiplayLastSeq: 10,
      // ngx plugin props
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 50
    };
  }

  ngOnInit(): void {
    // set init params
    this.myFromGroup = new FormGroup({
      pageSize: new FormControl()
    });
    this.myFromGroup.get('pageSize').setValue(this.configPgn.pageSize);
    // bind event & action
    this.bindFromFloatingLabel();
    //  this.pollData();
    this.getListData();
  }

  bindFromFloatingLabel() {

    const self = this;
    // for floating label
    if ($('.floating').length > 0) {
      $('.floating')
        .on('focus blur', function (e) {
          $(this)
            .parents('.form-focus')
            .toggleClass('focused', e.type === 'focus' || this.value.length > 0);
        })
        .trigger('blur');
    }

    // tslint:disable-next-line:only-arrow-functions
    $('.filter-row').find('input, select, textarea').keyup(function (e) {

      console.log(e.keyCode)
      if (e.keyCode === 13) {
        self.getSearchData();
      }

    });

  }

  getListData() {

    this.headerService.isLoadingSubject.next(true);
    this.orgId = this.localStorageService.getUserOrganizationId();
    this.authService.getUsers(this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize)).subscribe(
      (response: any) => {

        if(response.status === true){
          this.headerService.isLoadingSubject.next(false);
          this.searchClick = false;
          this.user = response.data;
          this.configPgn.totalItem = response.totalItems;
          this.configPgn.totalItems = response.totalItems;
          this.setDisplayLastSequence();
          this.headerService.isLoadingSubject.next(false);
        //  this.iterateKeyValue();
        }
      },error => {
      //  this.isLoading = false;
        this.headerService.isLoadingSubject.next(false);
        this.searchClick = false;
        if(error.status === 403){
          this.toastr.error('Forbidden', 'You are not authorized to access this functionality');
          //redirect to 403 page
          this.router.navigate(['/error/error403']);
        }
      }
    );

  }

  getSearchData() {
    this.getListData();
  }

  //get user by id
  getUserById(id: number) {
    this.authService.getUserById(id).subscribe(
      (response: any) => {
        if(response.status === true){
          this.singleUser = response.data;
        }
      },error => {
        // hide modal
        $('#userDetailsModal').modal('hide');
        if(error.status === 403){
          Swal.fire({
            title: 'Forbidden',
            text: 'You are not authorized to access this functionality',
            icon: 'error',
          })

        }
      }
    );
  }

  private getUserQueryParams(page: number, pageSize: number): any {

    const params: any = {};

    if (page) {
      params[`pageNum`] = page - 0;
    }
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    // push other attributes
    if (this.username) {
      params[`authority`] = this.username;
    }
    if(this.orgId){
      params[`orgId`] = this.orgId;
    }

    if(this.active){
      params[`active`] = this.active;
    }

    if(this.phone){
      params[`phone`] = this.phone;
    }
    if(this.email){
      params[`email`] = this.email;
    }

    return params;
  }

  deleteEntityData(id: any) {

    this.authService.deleteUser(id).subscribe(
      (response: any) => {
        $('#deleteModal').modal('hide');
        if(response.status === true){
          this.toastr.success('Success', 'User deleted successfully');
          this.getListData();
        }
      },error => {

        if(error.status === 403){
          this.toastr.error('Forbidden', 'You are not authorized to access this functionality');
          //redirect to 403 page
          this.router.navigate(['/error/error403']);
        }

        Swal.fire({
          title: 'Error',
          text: error.error.message,
          icon: 'error',
        });

      }
    );

  }

  search(){

    this.headerService.isLoadingSubject.next(true);
    this.searchClick = true;
    // get field name from dropdown list
    const fieldName = $('#searchField').val();
    // get field value from input
    const fieldValue = $('#searchValue').val();
    if(fieldName==='phone'){
      this.phone = fieldValue;
    }else if(fieldName==='email'){
      this.email = fieldValue;
    }else{
      Swal.fire({
        title: 'Info',
        text: 'This field is not supported for search',
        icon: 'info',
      });
    }

    //if changes dropwon value then reset the input value from params
    if(fieldName !== 'phone'){
      this.phone = '';
    }
    if(fieldName !== 'email'){
      this.email = '';
    }



    //if field value is empty then reset the value
    if(!fieldValue){
      this.phone = '';
      this.email = '';
    }


    setTimeout(() => {

      this.getListData();
    } , 1000);
    console.log(fieldName, fieldValue);
  }


    // pagination handling methods start -----------------------------------------------------------------------
    setDisplayLastSequence() {
      this.configPgn.pngDiplayLastSeq = (((this.configPgn.pageNum - 1) * this.configPgn.pageSize) + this.configPgn.pageSize);
      if (this.user.length < this.configPgn.pageSize) {
        this.configPgn.pngDiplayLastSeq = (((this.configPgn.pageNum - 1) * this.configPgn.pageSize) + this.configPgn.pageSize);
      }
      if (this.configPgn.totalItem < this.configPgn.pngDiplayLastSeq) {
        this.configPgn.pngDiplayLastSeq = this.configPgn.totalItem;
      }
    }
    handlePageChange(event: number) {
      this.configPgn.pageNum = event;
      // set for ngx
      this.configPgn.currentPage = this.configPgn.pageNum;
      this.getListData();
    }
    handlePageSizeChange(event: any): void {
      this.configPgn.pageSize = event.target.value;
      this.configPgn.pageNum = 1;
      // set for ngx
      this.configPgn.itemsPerPage = this.configPgn.pageSize;
      this.getListData();
    }
    // pagination handling methods end -------------------------------------------------------------------------

}
