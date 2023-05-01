export interface AppState {
  price: number;
  origin: string;
  destination: string;
  rate: number;
  currency: string;
  currencyRate: number;
  flights: any[];
  formSubmitted: boolean;
}
