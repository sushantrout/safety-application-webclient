import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [CommonModule, SelectButtonModule, CardModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SelectButtonModule, CardModule],
})
export class AppSharedModule { }
