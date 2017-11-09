import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicesModule } from './modules/services/services.module';

import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule.forRoot()
  ],
  exports: [
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
