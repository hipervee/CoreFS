import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor() { }
  getWeather() {
    return Observable.of({}).delay(2000);
  }

  getClimate() {
    return Observable.create(x => {
      setTimeout(() => {
        x.error('');
      }, 3000);
    });
  }
}
