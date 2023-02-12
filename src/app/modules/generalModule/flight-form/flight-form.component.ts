import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss'],
})
export class FlightFormComponent implements OnInit {
  flightForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

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

  searchJourney() {}
}
