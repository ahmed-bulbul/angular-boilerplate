import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base.component';
import { OrgListComponent } from './components/org/list/org-list.component';

const routes: Routes = [
  {
    path:'',
    component:BaseComponent,
    children:[
      {
        path:'org/list',
        component:OrgListComponent,
      },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
