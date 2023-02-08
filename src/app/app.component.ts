import { NbpHttpService } from './nbp.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private nbpHttpService: NbpHttpService){
  }

  ngOnInit(): void {
    this.buildForm();
    this.nbpHttpService.getCurrentRates().subscribe(result => console.log('result', result))
    this.form.valueChanges.subscribe(changes => console.log(changes))
  }

  private buildForm() {
    this.form = this.fb.group({
      home: this.fb.control(null),
      foreign: this.fb.control(null),
      fx: this.fb.control({disabled: true, value: null}),
    });
  }
}
