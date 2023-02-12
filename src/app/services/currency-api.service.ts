import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyAPIService {
  constructor(private http: HttpClient) {}

  getCurrency(symbol: string) {
    let url = 'https://api.exchangerate.host/latest?base=USD&symbols=' + symbol;
    console.log(url);

    return this.http.get(url);
  }
}
