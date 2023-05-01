import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrencyAPIService } from 'src/app/services/currency-api.service';
import { updateCurrency, updateCurrencyRate } from 'src/app/state/actions';
import { AppState } from 'src/app/state/app.state';
import { selectCurrency, selectCurrencyRate } from 'src/app/state/selectors';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
})
export class CurrencySelectorComponent implements OnInit {
  selectedCurrency: string = 'USD';
  currencyRate: number = 1;
  currentCurrency$: Observable<any> = new Observable();
  currentCurrencyRate$: Observable<any> = new Observable();
  currencies: string[] = ['USD', 'COP', 'EUR', 'GBP'];

  constructor(
    private currencyService: CurrencyAPIService,
    private store: Store<AppState>
  ) {
    this.store.subscribe((state) =>
      console.log('Estado actual del store:', state)
    );
  }

  ngOnInit(): void {
    this.currentCurrency$ = this.store.select(selectCurrency);
    this.currentCurrencyRate$ = this.store.select(selectCurrencyRate);
  }

  //metodo que se suscribe al servicio encargado de consultar la api con las tasas de cambio
  //despues emite esta información al componente padre
  getCurrencyRate() {
    this.currencyService
      .getCurrency(this.selectedCurrency)
      .subscribe((data: any) => {
        this.currencyRate = data.rates[this.selectedCurrency];
        this.updateCurrency(this.selectedCurrency);
        this.updateRate(this.currencyRate);
      });
  }

  updateCurrency(currency: string) {
    this.store.dispatch(updateCurrency({ currency }));
  }

  updateRate(currencyRate: number) {
    this.store.dispatch(updateCurrencyRate({ currencyRate }));
  }
}
