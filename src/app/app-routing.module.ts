import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/guard/auth.guard';
import { IsLoggedIn } from './security/guard/isLoggedIn.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)},
  {path: 'dev-tools', loadChildren: () => import(`./dev-tools/dev-tools.module`).then(m => m.DevToolsModule)},
  { path: 'error', loadChildren: () => import(`./errorpages/errorpages.module`).then(m => m.ErrorpagesModule) },
  { path: '', loadChildren: () => import(`./all-modules/all-modules.module`).then(m => m.AllModulesModule),canActivate:[AuthGuard] },
  { path: '**', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
