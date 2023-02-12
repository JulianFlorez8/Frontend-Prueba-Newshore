import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneyModel } from '../models/Journey.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyAPIService {
  constructor(private http: HttpClient) {}

  getCurrency(symbol: string) {
    let url = 'https://api.exchangerate.host/latest?base=USD&symbols=' + symbol;
    return this.http.get(url);
  }
}
