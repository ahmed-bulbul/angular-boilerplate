import { BaseModel } from "src/app/sharing/model/BaseModel.model";


export class Organization extends BaseModel {

  public orgCode: string;
  private description:string;
  private shortDescription:string;
  private logoText:string;
  private logoImage:string;
  private organizationType:Organization;
  private parent:Organization;
  private rootOrganization:boolean;
  private address:string;
  private telephone:string;
  private fax:string;
  private email:string;
  private tinNumber:string;



}
