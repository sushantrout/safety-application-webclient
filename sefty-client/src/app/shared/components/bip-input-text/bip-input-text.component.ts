import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from '../bip-shared/bip-value-accessor';

@Component({
  selector: 'bip-input-text',
  templateUrl: './bip-input-text.component.html',
  styleUrls: ['./bip-input-text.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: BipInputTextComponent, multi: true }
  ]
})
export class BipInputTextComponent extends ValueAccessor implements OnInit {

  @Input('optionValue') optionValue !: any;
  @Input('optionLabel') optionLabel !: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  changeEvent(event: any) {
    this.changed.forEach((f) => { f(this.value) });
  }

}
