import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentRateResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NbpHttpService {

  constructor(private http: HttpClient) { }

  getCurrentRates(): Observable<CurrentRateResponse[]> {
    const url = 'http://api.nbp.pl/api/exchangerates/tables/A'

    return this.http.get<CurrentRateResponse[]>(url)
  }
}
