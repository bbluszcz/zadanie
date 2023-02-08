import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCurrencyComponent } from './home-currency.component';

describe('HomeCurrencyComponent', () => {
  let component: HomeCurrencyComponent;
  let fixture: ComponentFixture<HomeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
