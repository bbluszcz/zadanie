import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-currency',
  templateUrl: './target-currency.component.html',
  styleUrls: ['./target-currency.component.scss']
})
export class TargetCurrencyComponent implements OnInit {
  @Input() form: FormGroup
  @Input() control: string

  constructor() { }

  ngOnInit(): void {
  }

}
