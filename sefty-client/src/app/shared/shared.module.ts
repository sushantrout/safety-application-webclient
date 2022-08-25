import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [

  ],
  imports: [CommonModule, CardModule, ButtonModule, TranslateModule, ChartModule, TableModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, TranslateModule, ChartModule, TableModule],
})
export class AppSharedModule { }
