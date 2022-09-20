import { BaseModel } from "src/app/sharing/model/BaseModel.model";
import { OperatingUnit } from "../../base/model/OperatingUnit.model";
import { Organization } from "../../base/model/Organization.model";

export interface User  extends BaseModel{

  username:	string,
  email:	string,
  enabled:	boolean,
  gender:	string,
  creationDateTime:	string,
  creationUser:	string,
  lastUpdateDateTime:	string,
  lastUpdateUser:	string,
  name:	string,
  password:	string,
  phone:	string,
  roles:	any[],
  photoPath: string;
  verificationCode: string;
  organization: Organization;
  operatingUnit: OperatingUnit;
}
