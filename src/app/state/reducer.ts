import { createReducer, on } from '@ngrx/store';
import {
  updatePrice,
  updateOrigin,
  updateDestination,
  updateRate,
  updateCurrency,
  updateSelectedCurrency,
  updateCurrencyRate,
  updateFlights,
  updateFormSubmitted,
} from './actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  price: 0,
  origin: '',
  destination: '',
  rate: 1,
  currency: 'USD',
  currencyRate: 1,
  flights: [],
  formSubmitted: false,
};

export const journeyReducer = createReducer(
  initialState,
  on(updatePrice, (state, { price }) => ({ ...state, price })),
  on(updateOrigin, (state, { origin }) => ({ ...state, origin })),
  on(updateDestination, (state, { destination }) => ({
    ...state,
    destination,
  })),
  on(updateRate, (state, { rate }) => ({ ...state, rate })),
  on(updateCurrency, (state, { currency }) => ({ ...state, currency })),
  on(updateCurrencyRate, (state, { currencyRate }) => ({
    ...state,
    currencyRate,
  })),
  on(updateFlights, (state, { flights }) => ({ ...state, flights })),
  on(updateFormSubmitted, (state, { formSubmitted }) => ({
    ...state,
    formSubmitted,
  }))
);
