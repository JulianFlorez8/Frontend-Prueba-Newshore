import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightFormComponent } from './modules/generalModule/flight-form/flight-form.component';
import { JourneyInformationComponent } from './modules/generalModule/journey-information/journey-information.component';
import { FlightCardComponent } from './modules/generalModule/flight-card/flight-card.component';
import { CurrencySelectorComponent } from './modules/generalModule/currency-selector/currency-selector.component';
import { ToUppercaseDirective } from './to-uppercase.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlightFormComponent,
    JourneyInformationComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
