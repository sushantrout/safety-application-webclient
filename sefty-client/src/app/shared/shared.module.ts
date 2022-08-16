import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardModule, ButtonModule, TranslateModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, TranslateModule],
})
export class AppSharedModule { }
