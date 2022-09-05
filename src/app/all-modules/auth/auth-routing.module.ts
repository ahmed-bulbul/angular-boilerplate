
import { RequestAuthCreateComponent } from './components/requestauth/create/request-auth-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { UserProfileComponent } from './components/user/profile/user-profile.component';
import { RoleComponent } from './components/role/role.component';

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
        path:'role',
        component:RoleComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
