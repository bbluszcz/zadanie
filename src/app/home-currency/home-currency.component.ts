import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-currency',
  templateUrl: './home-currency.component.html',
  styleUrls: ['./home-currency.component.scss']
})
export class HomeCurrencyComponent implements OnInit {
  @Input() form: FormGroup
  @Input() control: string

  constructor() { }

  ngOnInit(): void {
  }

}
