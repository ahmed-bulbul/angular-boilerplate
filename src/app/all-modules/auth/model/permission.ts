export interface Permission {
  id?: number;
  module?: string;
  entityName?:string;
  action?: string;
  chkAuthorizationChar?: string;
  authority?: string;
}
