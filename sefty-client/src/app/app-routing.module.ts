import { AdminModule } from './home/admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./home/admin/admin.module').then(m => m.AdminModule)
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
