export interface Permission {
  id?: number;
  module: string;
  action?: string;
  chkAuthorizationChar?: string;
  authority?: string;
}
