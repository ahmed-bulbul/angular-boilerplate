import { Organization } from './Organization.model';
import { BaseModel } from "src/app/sharing/model/BaseModel.model";


export class OperatingUnit extends BaseModel {

    public code: string;
    public organization : Organization;
    private longDescription:string;
    private shortDescription:string;
    private address:string;
    private telephone:string;
    private fax:string;
    private email:string;

}
