import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AppSharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
