import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightFormComponent } from './modules/generalModule/flight-form/flight-form.component';
import { FlightCardComponent } from './modules/generalModule/flight-card/flight-card.component';
import { CurrencySelectorComponent } from './modules/generalModule/currency-selector/currency-selector.component';
import { ToUppercaseDirective } from './to-uppercase.directive';
import { HttpClientModule } from '@angular/common/http';
import { API_ENDPOINTS } from './config';
import { FLIGHTS_API_ENDPOINT, CURRENCY_API_ENDPOINT } from './tokens';

@NgModule({
  declarations: [
    AppComponent,
    FlightFormComponent,
    FlightCardComponent,
    CurrencySelectorComponent,
    ToUppercaseDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: FLIGHTS_API_ENDPOINT, useValue: API_ENDPOINTS.flights },
    { provide: CURRENCY_API_ENDPOINT, useValue: API_ENDPOINTS.currency },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
