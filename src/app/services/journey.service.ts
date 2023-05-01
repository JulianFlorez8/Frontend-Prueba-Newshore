import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { JourneyModel } from '../models/Journey.model';
import { FlightModel } from '../models/Flight.model';
import { TransportModel } from '../models/Transport.model';
import { FLIGHTS_API_ENDPOINT } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(
    private http: HttpClient,
    @Inject(FLIGHTS_API_ENDPOINT) private flightsApiEndpoint: string
  ) {}

  //Metodo que que consume la API y mapea los objetos que devuelve a los modelos definidos en la carpeta models
  getFlights(): Observable<FlightModel[]> {
    return this.http.get(this.flightsApiEndpoint).pipe(
      map((response: Object) => {
        const flights: FlightModel[] = [];
        for (const flight of response as any[]) {
          const transport = new TransportModel(
            flight.flightCarrier,
            flight.flightNumber
          );
          const newFlight = new FlightModel(
            transport,
            flight.departureStation,
            flight.arrivalStation,
            flight.price
          );
          flights.push(newFlight);
        }
        return flights;
      }),
      catchError((err) => of(err))
    );
  }

  //Metodo que construye el objeto Journey, llamando a metodos auxiliares
  searchJourney(
    origin: string,
    destination: string,
    maxFlights: number
  ): Observable<JourneyModel> {
    return this.getFlights().pipe(
      map((flights: FlightModel[]) => {
        const journey = new JourneyModel();
        journey.Origin = origin.toUpperCase();
        journey.Destination = destination.toUpperCase();

        flights =
          this.searchFlightsBFS(
            journey.Origin,
            journey.Destination,
            flights,
            maxFlights
          ) || [];

        journey.Flights = flights;
        journey.Price = this.calculateTotalPrice(flights);
        console.log(journey);
        return journey;
      })
    );
  }

  /**
    Método que realiza una búsqueda en amplitud (BFS) para encontrar una ruta de vuelo desde el origen
    especificado hasta el destino especificado, con un número máximo de vuelos permitidos.
    @param origin: origen del viaje
    @param destination: destino del viaje
    @param flights: lista de todos los vuelos que se deben tomar para cumplir la ruta
    @param maxFlights: número máximo de vuelos permitidos en la ruta
    @returns una lista de objetos FlightModel que representa la ruta encontrada, o null si no se pudo encontrar una ruta.
  */

  searchFlightsBFS(
    origin: string,
    destination: string,
    flights: FlightModel[],
    maxFlights: number
  ): FlightModel[] | null {
    const queue = [origin];
    const parent = new Map<string, FlightModel>();
    const visited = new Set<string>();
    visited.add(origin);
    const steps = new Map<string, number>(); //<destino, numeroPasos para llegar a ese destino>
    steps.set(origin, 0); //inicializacion, para llegar al origen desde el origen se necesitan 0 pasos

    while (queue.length > 0) {
      const current = queue.shift() as string;
      const filteredFlights = flights.filter(
        (flight) => flight.Origin === current
      );
      for (const flight of filteredFlights) {
        if (visited.has(flight.Destination)) continue; //revisar si ya se visitó para evitar ciclos
        parent.set(flight.Destination, flight);
        visited.add(flight.Destination);
        const currentSteps = steps.get(current) as number;
        steps.set(flight.Destination, currentSteps + 1);
        if (flight.Destination === destination) {
          return this.reconstructRoute(parent, flight);
        }
        if (currentSteps + 1 >= maxFlights) continue; //si la ruta excede el numero maximo de vuelos, continuar buscando otra ruta
        queue.push(flight.Destination);
      }
    }
    return null; //retornar null en caso de no encontrar ninguna ruta
  }

  private reconstructRoute(
    parent: Map<string, FlightModel>,
    flight: FlightModel
  ): FlightModel[] {
    const route = [flight];
    while (parent.has(flight.Origin)) {
      flight = parent.get(flight.Origin) as FlightModel;
      route.unshift(flight);
    }
    return route;
  }

  /**
   Metodo que calcula el precio total del viaje, recorriendo cada vuelo y sumando su precio
   @param flights: lista de vuelos
   @returns double con el precio total
  */
  calculateTotalPrice(flights: FlightModel[]): number {
    let totalPrice = 0.0;
    for (const flight of flights) {
      totalPrice += flight.Price;
    }
    return totalPrice;
  }
}
