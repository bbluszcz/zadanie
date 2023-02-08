import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbpHttpService {

  constructor(private http: HttpClient) { }

  getCurrentRates(): Observable<any[]> {
    const url = 'http://api.nbp.pl/api/exchangerates/tables/A'

    return this.http.get<any>(url)
  }
}
