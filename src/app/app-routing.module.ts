import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/guard/auth.guard';
import { DevToolsGuard } from './security/guard/devtools.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)},
  {path: 'dev-tools', loadChildren: () => import(`./dev-tools/dev-tools.module`).then(m => m.DevToolsModule), canActivate: [DevToolsGuard]},
  { path: 'error', loadChildren: () => import(`./errorpages/errorpages.module`).then(m => m.ErrorpagesModule) },
  { path: '', loadChildren: () => import(`./all-modules/all-modules.module`).then(m => m.AllModulesModule),canActivate:[AuthGuard] },
  { path: '**', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
  //empty path redirect to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
