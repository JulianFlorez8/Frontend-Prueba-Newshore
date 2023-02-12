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

  constructor(private currency: CurrencyAPIService) {}

  convert() {
    this.currency.getCurrency(this.selectedCurrency).subscribe((data: any) => {
      this.currencyRate = data.rates[this.selectedCurrency];
      this.newSelectedCurrencyEvent.emit(this.selectedCurrency);
      this.newCurrencyRateEvent.emit(this.currencyRate);
    });
  }
}
