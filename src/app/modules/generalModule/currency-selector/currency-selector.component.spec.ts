import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { CurrencySelectorComponent } from './currency-selector.component';

import { CurrencyAPIService } from 'src/app/services/currency-api.service';
import { of } from 'rxjs';

fdescribe('CurrencySelectorComponent', () => {
  let component: CurrencySelectorComponent;
  let fixture: ComponentFixture<CurrencySelectorComponent>;
  let mockCurrencyAPIService: jasmine.SpyObj<CurrencyAPIService>;
  const mockResponse = {
    motd: {
      msg: '',
      url: '',
    },
    success: true,
    base: 'USD',
    date: '2023-02-11',
    rates: {
      COP: 4740.112867,
      EUR: 0.935115,
      GBP: 0.829098,
      USD: 1,
    },
  };
  beforeAll(() => {
    mockCurrencyAPIService = jasmine.createSpyObj('mockCurrencyAPIService', [
      'getCurrency',
    ]);
    mockCurrencyAPIService.getCurrency.and.returnValue(of(mockResponse));
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencySelectorComponent],
      providers: [
        { provide: CurrencyAPIService, useValue: mockCurrencyAPIService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CurrencySelectorComponent);
    component = fixture.componentInstance;
  });

  describe('getCurrency method', () => {
    it('transform EUR', () => {
      component.selectedCurrency = 'EUR';
      component.getCurrencyRate();
      expect(component.currencyRate).toEqual(0.935115);
    });

    it('transform  COP', () => {
      component.selectedCurrency = 'COP';
      component.getCurrencyRate();
      expect(component.currencyRate).toEqual(4740.112867);
    });
  });
});
