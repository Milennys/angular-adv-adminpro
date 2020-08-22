import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxsjs',
  templateUrl: './rxsjs.component.html',
  styles: []
})
export class RxsjsComponent implements OnDestroy {
  intervalSubs: Subscription;
  constructor() {

    // this.obsevableReturn().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   error => console.warn('Error:', error),
    //   () => console.table('Obs terminado'),
    // );

    this.intervalSubs = this.intervalObservable()
      .subscribe(
        (valor) => console.log(valor)
      );
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  intervalObservable(): Observable<number> {
    return interval(500)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
        take(10),
      );
  }

  obsevableReturn(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego a 2');
        }

      }, 1000);
    });
    return obs$;

  }
}
