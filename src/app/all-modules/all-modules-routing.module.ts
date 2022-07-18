import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AllModulesComponent,
    children: [

      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
