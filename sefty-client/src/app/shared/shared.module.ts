import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [],
  imports: [CommonModule, SelectButtonModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SelectButtonModule],
})
export class AppSharedModule {}
