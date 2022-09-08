import { SharedService } from 'src/app/sharing/service/shared.service';

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SystemService } from '../../../service/system.service';
import { HeaderService } from 'src/app/header/header.service';

declare const $: any;
@Component({
  selector: 'app-system-menu-list',
  templateUrl: './system-menu-list.component.html',
  styleUrls: ['./system-menu-list.component.css']
})
export class SystemMenuListComponent implements OnInit {

  public systemMenu: SystemMenuListComponent[];
  public entityAttribute: any[] = [];

  public pipe = new DatePipe('en-US');
  public myFromGroup: FormGroup;


  public configPgn: any;
 // public listData: any = [];
  public editId: any;
  public tempId: any;

  //search data
  private code: string;
  private sortDir: string = 'desc';

  //search button click flag
  public searchClick: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private systemService: SystemService,
    private headerService: HeaderService
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

  public getSearchData() {
    this.getListData();

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
    if (this.code) {
      params[`code`] = this.code;
    }

    if (this.sortDir) {
      params[`sortDir`] = this.sortDir;
    }



    return params;

  }

  getListData(){
   // this.isLoading = true;
   this.headerService.isLoadingSubject.next(true);
    this.systemService.getMenuList(this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize)).subscribe(
      (response: any) => {

        if(response.status === true){
          this.headerService.isLoadingSubject.next(false);
          this.searchClick = false;
          this.systemMenu = response.data;
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


  deleteEntityData(tempId){
    this.headerService.isLoadingSubject.next(true);
    this.systemService.deleteSystemMenu(tempId).subscribe(
      (response: any) => {
        if(response.status === true){
          this.headerService.isLoadingSubject.next(false);
          this.getListData();
          //hide modal
          $('#deleteModal').modal('hide');
          this.toastr.success('Success', 'Record deleted successfully');
        }
      },error => {


        this.headerService.isLoadingSubject.next(false);
        console.log(error);
      //if status code is 403 then forbidden
        if(error.status === 403){
          this.toastr.error('Forbidden', 'You are not authorized to access this functionality');
          $('#delete_entity').modal('hide');
        }

        $('#delete_entity').modal('hide');
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
    if(fieldName==='code'){
      this.code = fieldValue;
    }else if(fieldName==='name'){
      this.code = fieldValue;
    }else{
      Swal.fire({
        title: 'Info',
        text: 'This field is not supported for search',
        icon: 'info',
      });
    }



    //if field value is empty then reset the value
    if(!fieldValue){
      this.code = '';
    }

    setTimeout(() => {

      this.getListData();
    } , 1000);
    console.log(fieldName, fieldValue);

  }

  sortedBy(){
    if(this.sortDir === 'desc'){
      this.sortDir = 'asc';
    }else{
      this.sortDir = 'desc';
    }
    this.getListData();

  }



    // pagination handling methods start -----------------------------------------------------------------------
    setDisplayLastSequence() {
      this.configPgn.pngDiplayLastSeq = (((this.configPgn.pageNum - 1) * this.configPgn.pageSize) + this.configPgn.pageSize);
      if (this.systemMenu.length < this.configPgn.pageSize) {
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
