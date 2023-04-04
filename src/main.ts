import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { from, switchMap, of, tap, mergeMap } from 'rxjs';
import { delay, toArray } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor() {
    from([1, 2, 3, 4, 5])
      .pipe(
        mergeMap((r) => of(r).pipe(delay(1000))),
        toArray(),
        tap((n) => console.log(n))
      )
      .subscribe();
  }
}

bootstrapApplication(App);
