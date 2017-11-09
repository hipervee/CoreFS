import { CounterService } from './modules/services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public counterService: CounterService) {}

  increment() {
    this.counterService.counter += 1;
  }
}
