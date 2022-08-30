import { BaseModel } from 'src/app/sharing/model/BaseModel.model';
import { BaseModule } from "../../base/model/BaseModule.model";

export interface SystemEntity extends BaseModel {

  rootDirectory : string;
  rootPackage : string;
  moduleName : string;
  baseModule : BaseModule[];
  subModuleName: string;
  domainName : string;

}
