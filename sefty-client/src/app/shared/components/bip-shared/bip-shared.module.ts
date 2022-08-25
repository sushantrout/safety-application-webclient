import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BipLabelComponent } from '../bip-label/bip-label.component';
import { BipRadioComponent } from '../bip-radio/bip-radio.component';
import { BipCheckboxComponent } from '../bip-checkbox/bip-checkbox.component';
import { BipSelectButtonComponent } from '../bip-select-button/bip-select-button.component';
import { BipInputTextComponent } from '../bip-input-text/bip-input-text.component';
import { BipInputNumberComponent } from '../bip-input-number/bip-input-number.component';
import { BipInputFileComponent } from '../bip-input-file/bip-input-file.component';
import { BipDataGridComponent } from '../bip-data-grid/bip-data-grid.component';
import { BipDropdownComponent } from '../bip-dropdown/bip-dropdown.component';
import { BipMultiselectComponent } from '../bip-multiselect/bip-multiselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppSharedModule } from '../../shared.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [BipLabelComponent,
    BipRadioComponent,
    BipCheckboxComponent,
    BipSelectButtonComponent,
    BipInputTextComponent,
    BipInputNumberComponent,
    BipInputFileComponent,
    BipDataGridComponent,
    BipDropdownComponent,
    BipMultiselectComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppSharedModule,
    CheckboxModule,
    RadioButtonModule,
    SelectButtonModule,
    DropdownModule,
    MultiSelectModule
  ], exports: [
    BipLabelComponent,
    BipRadioComponent,
    BipCheckboxComponent,
    BipSelectButtonComponent,
    BipInputTextComponent,
    BipInputNumberComponent,
    BipInputFileComponent,
    BipDataGridComponent,
    BipDropdownComponent,
    BipMultiselectComponent
  ]
})
export class BipSharedModule { }
