import { SystemMenuCreateComponent } from './components/menu/create/system-menu-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { SystemMenuListComponent } from './components/menu/list/system-menu-list.component';


const routes: Routes = [
  {
    path:'',
    component:SystemComponent,
    children:[
      {
        path:'menu/create',
        component:SystemMenuCreateComponent,
      },
      {
        path:'menu/list',
        component:SystemMenuListComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
