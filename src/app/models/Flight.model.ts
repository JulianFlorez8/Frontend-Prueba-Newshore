import { TransportModel } from './Transport.model';
export class FlightModel {
  constructor(
    transport: TransportModel,
    origin: string,
    destination: string,
    price: number
  ) {
    this.Transport = transport;
    this.Origin = origin;
    this.Destination = destination;
    this.Price = price;
  }
  Transport?: TransportModel;
  TransportID: number = 0;
  Origin: string = '';
  Destination: string = '';
  Price: number = 0.0;
}
