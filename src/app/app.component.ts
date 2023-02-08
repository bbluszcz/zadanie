import { NbpHttpService } from './nbp.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, mergeMap, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  readonly fxCode = 'EUR'
  form: FormGroup;
  private _destroy$: Subject<void> = new Subject<void>();


  constructor(private fb: FormBuilder, private nbpHttpService: NbpHttpService){
  }

  ngOnInit(): void {
    this.buildForm();
    this.getCurrentRates().subscribe();
    this.registerValueChanges();

  }

  private buildForm() {
    this.form = this.fb.group({
      home: this.fb.control(null),
      foreign: this.fb.control(null),
      fx: this.fb.control({disabled: true, value: null}),
    });
  }

  private getCurrentRates(){
    return this.nbpHttpService.getCurrentRates().pipe(
      map(result => result[0].rates.find(item => item.code === this.fxCode)?.mid),
      tap((currentFx) => this.form.get('fx')?.setValue(currentFx)
      )
    )
  }

  private registerValueChanges(){
    this.form.get('home')?.valueChanges.pipe(
      takeUntil(this._destroy$),
      debounceTime(250),
      mergeMap(() => this.getCurrentRates())
      ).subscribe(fxValue => {
      const homeValue = this.form.get('home')?.value;
      if (!fxValue) return;
      const roundedNumber =  Math.round( (homeValue / fxValue) * 100) / 100;
      this.form.get('foreign')?.setValue( roundedNumber, {emitEvent: false})
    });
    this.form.get('foreign')?.valueChanges.pipe(
      takeUntil(this._destroy$),
      debounceTime(250),
      mergeMap(() => this.getCurrentRates())
      ).subscribe(fxValue => {
      const foreignValue = this.form.get('foreign')?.value;
      if (!fxValue) return;
      const roundedNumber =  Math.round( (foreignValue * fxValue) * 100) / 100;
      this.form.get('home')?.setValue(roundedNumber, {emitEvent : false})
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
