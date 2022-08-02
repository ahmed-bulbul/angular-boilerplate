import { Organization } from './../../base/model/Organization.model';

export class SystemMenu {

  public id:number;
  public code: string;  //unique code for the menu
  public description: string;
  public entityName: string;
  public openUrl: string;
  public apiUrl: string;
  public sequence: number;
  public iconHtml: string;
  public hasChild: boolean;
  public visibleToAll: boolean;
  public chkAuthorization:string;
  public chkAuthorizationChar:string;
  public leftSideMenu: boolean;
  public dashboardMenu: boolean;
  public mainHeaderMenu: boolean;

  public isChild: boolean;
  public isOpenNewTab: boolean;

  private handleOrganization:Organization;
  public orgCode;

  public parentMenu:SystemMenu;
  public parentMenuCode:string;

  public superAdminAccessOnly:boolean;
  public adminAccessOnly:boolean;


  //system log
  private createdBy:string;
  private createdAt:Date;
  private updatedBy:string;
  private updatedAt:Date;
  private active:boolean;

  //create constructor
  constructor() {
    this.id = 0;
    this.code = '';
    this.description = '';
    this.entityName = '';
    this.openUrl = '';
    this.apiUrl = '';
    this.sequence = 0;
    this.iconHtml = '';
    this.hasChild = false;
    this.visibleToAll = false;
    this.chkAuthorization = '';
    this.chkAuthorizationChar = '';
    this.leftSideMenu = false;
    this.dashboardMenu = false;
    this.mainHeaderMenu = false;
    this.isChild = false;
    this.isOpenNewTab = false;
    this.handleOrganization = new Organization();
    this.orgCode = '';
    this.parentMenu = null;
    this.parentMenuCode = '';
    this.superAdminAccessOnly = false;
    this.adminAccessOnly = false;
    this.createdBy = '';
    this.createdAt = new Date();
    this.updatedBy = '';
    this.updatedAt = new Date();
    this.active = true;
  }



}
