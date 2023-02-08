import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCurrencyComponent } from './home-currency/home-currency.component';
import { TargetCurrencyComponent } from './target-currency/target-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCurrencyComponent,
    TargetCurrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
