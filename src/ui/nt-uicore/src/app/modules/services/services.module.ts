import { NotificationService } from './notification.service';
import { CounterService } from './counter.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  imports: [
    CommonModule,
    SnotifyModule
  ],
  exports: [
    SnotifyModule
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService, CounterService, NotificationService]
    };
  }
}
