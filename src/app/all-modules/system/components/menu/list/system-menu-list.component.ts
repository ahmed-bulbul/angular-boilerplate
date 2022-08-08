import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SystemService } from '../../../service/system.service';

declare const $: any;
@Component({
  selector: 'app-system-menu-list',
  templateUrl: './system-menu-list.component.html',
  styleUrls: ['./system-menu-list.component.css']
})
export class SystemMenuListComponent implements OnInit {

  public systemMenu: SystemMenuListComponent[];

  public pipe = new DatePipe('en-US');
  public myFromGroup: FormGroup;

  public configPgn: any;
 // public listData: any = [];
  public editId: any;
  public tempId: any;

  //search data
  private code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private systemService: SystemService
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



    return params;

  }

  getListData(){
    this.spinnerService.show();
    this.systemService.getMenuList(this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize)).subscribe(
      (response: any) => {
        this.spinnerService.hide();
        this.systemMenu = response.data;
        this.configPgn.totalItem = response.totalItems;
        this.configPgn.totalItems = response.totalItems;
        this.setDisplayLastSequence();
      }
    );
  }
  deleteEntityData(tempId){

  }
  search(){
    // get field name from dropdown list
    const fieldName = $('#searchField').val();
    // get field value from input
    const fieldValue = $('#searchValue').val();
    if(fieldName==='code'){
      this.code = fieldValue;
    }

    //if field value is empty then reset the value
    if(!fieldValue){
      this.code = '';
    }

    this.getListData();

    console.log(fieldName, fieldValue);

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
