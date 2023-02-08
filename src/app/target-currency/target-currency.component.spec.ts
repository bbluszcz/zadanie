import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCurrencyComponent } from './target-currency.component';

describe('TargetCurrencyComponent', () => {
  let component: TargetCurrencyComponent;
  let fixture: ComponentFixture<TargetCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
