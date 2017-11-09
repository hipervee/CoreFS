import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicesModule } from 'nt-uicore';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
