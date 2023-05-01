import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, of, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  constructor(private readonly spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.hide()));
  }
}
