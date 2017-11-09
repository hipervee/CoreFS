import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiMockService {

  constructor() { }

  get(): Observable<any> {
    const successObj = {
      success: true,
      message: 'Succeeded'
    };

    const failureObject = {
      success: true,
      message: 'Succeeded'
    };

    return Observable.of(successObj).delay(2000);
  }
}
