import { BaseModel } from "src/app/sharing/model/BaseModel.model";


export class Organization extends BaseModel {

  public code: string;
  public description:string;
  public shortDescription:string;
  public logoText:string;
  public logoImage:string;
  public organizationType:Organization;
  public parent:Organization;
  public rootOrganization:boolean;
  public address:string;
  public telephone:string;
  public fax:string;
  public email:string;
  public tinNumber:string;



}
