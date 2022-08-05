import { BaseModel } from "src/app/sharing/model/BaseModel.model";

export class RequestAuth extends BaseModel {

  public module:string;
  public chkAuthorizationChar:string;
  public authority:string;
  public userGroup:string;
  public username:string;

}
