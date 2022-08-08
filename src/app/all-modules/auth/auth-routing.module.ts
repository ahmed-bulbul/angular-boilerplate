import { RequestAuthEditComponent } from './components/requestauth/edit/request-auth-edit.component';
import { RequestAuthCreateComponent } from './components/requestauth/create/request-auth-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

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
        path:'request-auth/edit',
        component:RequestAuthEditComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
