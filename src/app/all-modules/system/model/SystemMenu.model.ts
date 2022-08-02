import { Organization } from './../../base/model/Organization.model';

export class SystemMenu {

  private id:number;
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



}
