import { Component, OnInit } from '@angular/core';
import { NotificationService, AsyncConfig } from 'nt-uicore';
import { WeatherService } from '../weather.service';

declare var $: any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [WeatherService]
})
export class NotificationsComponent implements OnInit {
  constructor(private ns: NotificationService, private ws: WeatherService) { }

  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

    }, {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }
  ngOnInit() {
  }

  success() {
    this.ns.success('Success Message Body', 'Success');
  }

  info() {
    this.ns.info('This is info body', 'Information');
  }

  apiCall() {
    const config = new AsyncConfig('Processing', 'Success', 'Failure');
    this.ns.async(this.ws.getWeather(), config).subscribe(s => {
    }, f => {
    });
    this.ns.async(this.ws.getClimate(), config).subscribe(s => { });
  }
}
