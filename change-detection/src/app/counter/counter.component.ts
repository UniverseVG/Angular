import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  // NgZone,
  OnInit,
  inject,
  // inject,
  signal,
} from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  // private zone = inject(NgZone);
  count = signal(0);
  count$ = toObservable(this.count);
  interval$ = interval(1000);
  interSignal = toSignal(this.interval$, { initialValue: 0 });
  customInterval$ = (limit = 1000) =>
    new Observable((sub) => {
      let num = 0;
      const interval = setInterval(() => {
        if (num > 3) {
          clearInterval(interval);
          sub.complete();
          return;
        }
        sub.next({ message: 'New value' + num });
        num++;
      }, limit);
    });
  private destroyRef = inject(DestroyRef);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.count.set(0);
    // }, 4000);
    // this.zone.runOutsideAngular(() => {
    // setTimeout(() => {
    //   console.log('Timer Expired');
    // }, 5000);
    // });
    // interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });

    this.customInterval$(1000).subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
    });
    const subscription = this.count$.subscribe({
      next: (val) => console.log(val),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    // this.count.update((prevCount) => prevCount + 1);
    this.count.update((prevCount) => prevCount + 1);
  }
}
