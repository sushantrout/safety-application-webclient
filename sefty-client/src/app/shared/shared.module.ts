import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
@NgModule({
  declarations: [

  ],
  imports: [CommonModule, CardModule, ButtonModule, TranslateModule, ChartModule, TableModule, InputTextModule, SelectButtonModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, TranslateModule, ChartModule, TableModule, InputTextModule, SelectButtonModule],
})
export class AppSharedModule { }
