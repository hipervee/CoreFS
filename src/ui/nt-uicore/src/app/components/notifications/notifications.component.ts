import { AsyncConfig } from './../../models/async-config.model';
import { NotificationService } from './../../modules/services/notification.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiMockService } from './api-mock.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [ApiMockService]
})
export class NotificationsComponent {
  constructor(private ns: NotificationService, private api: ApiMockService) {
  }

  success() {
    this.ns.success('This is success message');
  }

  info() {
    this.ns.info('This is success info', 'Some Title');
  }

  callSomething() {
    const config = new AsyncConfig('Processing', 'Succ', 'Fail');
    this.ns.async(this.api.get(), config).subscribe(s => {
      console.log('Success', s);
    }, e => {
      console.log('Error', e);
    });
  }
}
