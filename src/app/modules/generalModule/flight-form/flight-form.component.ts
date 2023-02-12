import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss'],
})
export class FlightFormComponent implements OnInit {
  flightForm!: FormGroup;
  price: number = 0.0;
  flights: any[] = [];
  rate: number = 1;
  currency: string = 'USD';

  ngOnInit(): void {
    this.initForm();
  }

  constructor(private journeyService: JourneyService) {}

  initForm() {
    this.flightForm = new FormGroup(
      {
        origin: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        maxFlights: new FormControl(1, [Validators.required]),
      },
      {
        validators: this.matchValidator('origin', 'destination'),
      }
    );
  }

  matchValidator(controlName: string, controlTwoName: string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
      const control = form.get(controlName);
      const controlTwo = form.get(controlTwoName);
      if (control && controlTwo && control.value === controlTwo.value) {
        return { matchError: true };
      }
      return null;
    };
  }

  searchJourney() {
    let origin = this.flightForm.get('origin')?.value;
    let destination = this.flightForm.get('destination')?.value;
    let maxFlights = this.flightForm.get('maxFlights')?.value;
    this.journeyService
      .postJourney(origin, destination, maxFlights)
      .subscribe((data) => {
        this.price = data.Price;
        this.flights = data.Flights;
        console.log(data);
      });
  }

  changeCurrency(newCurrency: string): void {
    this.currency = newCurrency;
  }

  changeRate(newRate: number): void {
    this.rate = newRate;
  }
}
