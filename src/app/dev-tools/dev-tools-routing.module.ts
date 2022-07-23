import { DevToolsCreateComponent } from './components/create/dev-tools-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevToolsComponent } from './dev-tools.component';

const routes: Routes = [

  {
    path: '',
    component:DevToolsComponent,
    children:[

      {
        path:'create',
        component: DevToolsCreateComponent
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevToolsRoutingModule { }
