import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JourneyModel } from '../models/Journey.model';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(private http: HttpClient) {}

  //metodo que envia una petición post a la api del backend
  //a traves del modulo http de angular inyectado en el constructor de la clase
  postJourney(
    origin: string,
    destination: string,
    maxFlights: number
  ): Observable<JourneyModel> {
    let url = 'https://localhost:44329/api/Journey/calculate';
    return this.http.post<JourneyModel>(
      url,
      {
        Origin: origin.toUpperCase(),
        Destination: destination.toUpperCase(),
        MaxFlights: maxFlights,
      },
      {
        headers: new HttpHeaders(),
      }
    );
  }
}
