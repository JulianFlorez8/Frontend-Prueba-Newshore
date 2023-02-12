import { FlightModel } from './Flight.model';
export class JourneyModel {
  Flights: FlightModel[] = [];
  //JourneyId: number = 0;
  Origin: string = '';
  Destination: string = '';
  Price: number = 0.0;
}
