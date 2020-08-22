import { filter, map } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { pipe, Subscription } from 'rxjs';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {
  title;
  titleSubs$: Subscription;
  constructor(private router: Router) {

    this.titleSubs$ = this.getDataRoutes()
      .subscribe(
        ({ title }) => {
          console.log(title);
          this.title = title;
          document.title = `AdminPro - ${title}`;
        }
      );

  }

  getDataRoutes() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }
}
