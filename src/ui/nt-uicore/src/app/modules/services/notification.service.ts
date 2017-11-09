import { AsyncConfig } from './../../models/async-config.model';
import { Observable } from 'rxjs/Rx';
import { SnotifyService, SnotifyToastConfig } from 'ng-snotify';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private defaultConfig: SnotifyToastConfig = null;
  constructor(private snotifyService: SnotifyService) {
    this.defaultConfig = {
      showProgressBar: false
    };
  }

  success(message: string, title?: string) {
    this.snotifyService.success(message, title, this.defaultConfig);
  }

  info(message: string, title?: string) {
    this.snotifyService.info(message, title, this.defaultConfig);
  }

  async(observable: Observable<any>, config: AsyncConfig) {
    const successConfig = {
      type: 'success',
      closeOnClick: true,
      timeout: 5000
    };

    const errorConfig = {
      type: 'error',
      closeOnClick: true,
      timeout: 5000
    };
    let callerObserver = null;
    const callerObservable = Observable.create(o => callerObserver = o);

    const successAction = Observable.create(observer => {
      observable.subscribe(success => {
        observer.next({ body: config.successMessage, config: successConfig });
        callerObserver.next(success);
      }, error => {
        observer.next({ body: config.failureMessage, config: errorConfig });
        callerObserver.next(error);
      });
    });
    this.snotifyService.async(config.initialMessage, successAction, this.defaultConfig);
    return callerObservable;
  }
}
