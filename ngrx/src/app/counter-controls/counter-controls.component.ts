import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}
  // constructor(private counterService: CounterService) {}

  increment() {
    this.store.dispatch(increment({ value: 2 }));
    // this.counterService.increment();
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
    // this.counterService.decrement();
  }
}
