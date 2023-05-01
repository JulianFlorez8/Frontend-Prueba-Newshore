import { createAction, props } from '@ngrx/store';

export const updatePrice = createAction(
  '[Flight] Update Price',
  props<{ price: number }>()
);
export const updateOrigin = createAction(
  '[Flight] Update Origin',
  props<{ origin: string }>()
);
export const updateDestination = createAction(
  '[Flight] Update Destination',
  props<{ destination: string }>()
);
export const updateRate = createAction(
  '[Flight] Update Rate',
  props<{ rate: number }>()
);
export const updateCurrency = createAction(
  '[Flight] Update Currency',
  props<{ currency: string }>()
);
export const updateSelectedCurrency = createAction(
  '[Flight] Update Selected Currency',
  props<{ selectedCurrency: string }>()
);
export const updateCurrencyRate = createAction(
  '[Flight] Update Currency Rate',
  props<{ currencyRate: number }>()
);
export const updateFlights = createAction(
  '[Flight] Update Flights',
  props<{ flights: any[] }>()
);
export const updateFormSubmitted = createAction(
  '[Flight] Update Form Submitted',
  props<{ formSubmitted: boolean }>()
);
