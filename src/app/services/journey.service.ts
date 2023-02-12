import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JourneyModel } from '../models/Journey.model';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(private http: HttpClient) {}

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
