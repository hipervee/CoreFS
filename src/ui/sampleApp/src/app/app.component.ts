import { WeatherService } from './weather.service';
import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { CounterService, NotificationService, AsyncConfig } from 'nt-uicore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'app';
  constructor(public counterService: CounterService, private ns: NotificationService, private weatherService: WeatherService) { }

  success() {
    this.ns.success('This is success message');
  }
  incr() {
    this.counterService.counter += 1;
  }

  apiCall() {
    const config = new AsyncConfig('Processing', 'Success', 'Failure');
    this.ns.async(this.weatherService.getWeather(), config).subscribe(s => {
    }, f => {
    });
    this.ns.async(this.weatherService.getClimate(), config).subscribe(s => {});
  }
}
