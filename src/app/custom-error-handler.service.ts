import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from "@sentry/angular";

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    Sentry.withScope(scope => {
      scope.setTag('customTag', 'error');
      scope.setExtra('test', 'this is a test');
      scope.setContext('test', { value: 'test context' });
      Sentry.captureException(error);
    });
  }
}
