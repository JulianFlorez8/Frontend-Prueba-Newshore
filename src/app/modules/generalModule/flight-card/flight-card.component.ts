import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {
  @Input() price!: number;
  @Input() origin!: string;
  @Input() destination!: string;
  @Input() rate: number = 1;
  @Input() currency: string = 'USD';
}
