import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import(`./user-management/user.module`).then(m => m.UserModule)
      },
      {
        path: 'role',
        loadChildren: () => import(`./role-management/role.module`).then(m => m.RoleModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
