import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('journey');

export const selectPrice = createSelector(
  selectAppState,
  (state: AppState) => state.price
);

export const selectOrigin = createSelector(
  selectAppState,
  (state: AppState) => state.origin
);

export const selectDestination = createSelector(
  selectAppState,
  (state: AppState) => state.destination
);

export const selectRate = createSelector(
  selectAppState,
  (state: AppState) => state.rate
);

export const selectCurrency = createSelector(
  selectAppState,
  (state: AppState) => state.currency
);

export const selectCurrencyRate = createSelector(
  selectAppState,
  (state: AppState) => state.currencyRate
);

export const selectFlights = createSelector(
  selectAppState,
  (state: AppState) => state.flights
);

export const selectFormSubmitted = createSelector(
  selectAppState,
  (state: AppState) => state.formSubmitted
);
