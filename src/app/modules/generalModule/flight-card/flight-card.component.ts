import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectCurrency, selectCurrencyRate } from 'src/app/state/selectors';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {
  @Input() price!: number;
  @Input() origin!: string;
  @Input() destination!: string;
  currentCurrency$: Observable<any> = new Observable();
  currentCurrencyRate$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.currentCurrency$ = this.store.select(selectCurrency);
    this.currentCurrencyRate$ = this.store.select(selectCurrencyRate);
  }
}
