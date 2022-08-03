import { BaseModel } from "src/app/sharing/model/BaseModel.model";

export class RequestAuth extends BaseModel {

  private module:string;
  private chkAuthorizationChar:string;
  private authority:string;
  private userGroup:string;
  private username:string;

}
