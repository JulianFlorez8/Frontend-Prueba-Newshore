import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JourneyModel } from '../models/Journey.model';
import { Observable } from 'rxjs';
import { CURRENCY_API_ENDPOINT } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class CurrencyAPIService {
  constructor(
    private http: HttpClient,
    @Inject(CURRENCY_API_ENDPOINT) private currencyApiEndpoint: string
  ) {}

  //metodo que consulta la api de tasa de cambios
  //a traves del get del modulo http de angular inyectado en el constructor de la clase
  getCurrency(symbol: string) {
    let url = this.currencyApiEndpoint + symbol;
    return this.http.get(url);
  }
}
