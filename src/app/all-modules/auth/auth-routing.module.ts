
import { RequestAuthCreateComponent } from './components/requestauth/create/request-auth-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { UserProfileComponent } from './components/user/profile/user-profile.component';
import { RoleCreateComponent } from './components/role/create/role-create.component';
import { RoleListComponent } from './components/role/list/role-list.component';
import { RoleEditComponent } from './components/role/edit/role-edit.component';
import { UserListComponent } from './components/user/list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path:'request-auth/create',
        component:RequestAuthCreateComponent,
      },

      {
        path:'user-profile',
        component:UserProfileComponent,
      },
      {
        path:'role/create',
        component:RoleCreateComponent,
      },
      {
        path:'role/list',
        component:RoleListComponent
      },
      {
        path:'role/edit/:id',
        component:RoleEditComponent
      },
      {
        path:'user/list',
        component:UserListComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
