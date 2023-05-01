import { InjectionToken } from '@angular/core';

export const FLIGHTS_API_ENDPOINT = new InjectionToken<string>(
  'FlightsApiEndpoint'
);
export const CURRENCY_API_ENDPOINT = new InjectionToken<string>(
  'CurrencyApiEndpoint'
);
