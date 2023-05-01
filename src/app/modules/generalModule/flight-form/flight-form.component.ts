import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectCurrency, selectCurrencyRate } from 'src/app/state/selectors';
import { JourneyModel } from 'src/app/models/Journey.model';
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
  formSubmitted = false;
  currentCurrency$: Observable<any> = new Observable();
  currentCurrencyRate$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.initForm();
    this.currentCurrency$ = this.store.select(selectCurrency);
    this.currentCurrencyRate$ = this.store.select(selectCurrencyRate);
  }

  constructor(
    private journeyService: JourneyService,
    private store: Store<AppState>
  ) {}
  //metodo que se llama al iniciar el componente con ngOnInit para
  //inicializar el formulario con sus respectivas validaciones
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

  //metodo que valida no se repitan los valores de los inputs del formulario
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

  //metodo que obtiene los valores a enviar al endpoint de la API a traves de una solicitud POST
  //y se suscribe al servicio encargado de enviarlos
  searchJourney() {
    this.formSubmitted = true;
    let origin = this.flightForm.get('origin')?.value;
    let destination = this.flightForm.get('destination')?.value;
    let maxFlights = this.flightForm.get('maxFlights')?.value;
    this.journeyService
      .searchJourney(origin, destination, maxFlights)
      .subscribe((journey: JourneyModel) => {
        this.price = journey.Price;
        this.flights = journey.Flights;
      });
  }
}
