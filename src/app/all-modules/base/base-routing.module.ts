import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';
import { OrgCreateComponent } from './components/org/create/org-create.component';
import { OrgEditComponent } from './components/org/edit/org-edit.component';
import { OrgListComponent } from './components/org/list/org-list.component';
import { OuCreateComponent } from './components/ou/create/ou-create.component';
import { OuListComponent } from './components/ou/list/ou-list.component';

const routes: Routes = [
  {
    path:'',
    component:BaseComponent,
    children:[
      {
        path:'org/list',
        component:OrgListComponent,
      },
      {
        path:'org/create',
        component:OrgCreateComponent,
      },
      {
        path:'org/edit/:id',
        component:OrgEditComponent
      },
      {
        path:'ou/list',
        component:OuListComponent,
      },
      {
        path:'ou/create',
        component:OuCreateComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
