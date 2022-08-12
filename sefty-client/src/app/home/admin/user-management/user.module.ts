import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
