import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css'],
})
export class DynamicFieldComponent implements OnInit {
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;
  @Input() role!: string;

  constructor() {}

  ngOnInit(): void {}

  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
}
