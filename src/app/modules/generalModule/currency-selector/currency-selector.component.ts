import { Component } from '@angular/core';
import { CurrencyAPIService } from 'src/app/services/currency-api.service';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
})
export class CurrencySelectorComponent {
  currencyJson: any[] = [];
  selectedCurrency: string = 'USD';
  currencyRate: number = 1;

  constructor(private currency: CurrencyAPIService) {}

  convert() {
    this.currency.getCurrency(this.selectedCurrency).subscribe((data: any) => {
      this.currencyRate = data.rates[this.selectedCurrency];
    });
  }
}
