import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyAPIService } from 'src/app/services/currency-api.service';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
})
export class CurrencySelectorComponent {
  selectedCurrency: string = 'USD';
  currencyRate: number = 1;
  @Output() newCurrencyRateEvent = new EventEmitter<number>();
  @Output() newSelectedCurrencyEvent = new EventEmitter<string>();

  constructor(private currencyService: CurrencyAPIService) {}

  //metodo que se suscribe al servicio encargado de consultar la api con las tasas de cambio
  //despues emite esta información al componente padre
  getCurrencyRate() {
    this.currencyService
      .getCurrency(this.selectedCurrency)
      .subscribe((data: any) => {
        this.currencyRate = data.rates[this.selectedCurrency];
        this.newSelectedCurrencyEvent.emit(this.selectedCurrency);
        this.newCurrencyRateEvent.emit(this.currencyRate);
      });
  }
}
