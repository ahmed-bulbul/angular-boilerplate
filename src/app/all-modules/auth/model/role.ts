import { User } from './user';

export interface Role {
  authority: string;
  creationDateTime: string;
  creationUser: string;
  description: string;
  id: number;
  lastUpdateDateTime: string;
  lastUpdateUser: string;
  status: string;
  requestAccess?: any[];
  users?: User[];
}
