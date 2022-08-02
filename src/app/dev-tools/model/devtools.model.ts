import { BaseModel } from "src/app/sharing/model/BaseModel.model";
import { AttributeModel } from "./Attribute.model";

export class DevToolsModel extends BaseModel {
  public rootDirectory: string;
  public rootPackage: string;
  public moduleName: string;
  public subModuleName: string;
  public domainName: string;
  public attributes: AttributeModel[];


}

