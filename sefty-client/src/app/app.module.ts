import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './shared/shared.module';
import { AdminModule } from './home/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
