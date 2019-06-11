import { Component, Input, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'hello',
  template: `
    <button mat-raised-button color="primary" (click)="action('value01')">Set value01</button>
    <button mat-raised-button color="primary" (click)="action('value02')">Set value02</button>
    <button mat-raised-button color="primary" (click)="close()">Close</button>

    <div>data: {{ data | json }}</div>
  `,
  styles: [`
    :host { background-opacity: 1; background-color: grey; }
    button { margin: 8px }
    `]
})
export class HelloComponent  {
  data: any;
  helloComplete = new Subject<string>();

  action(value: string) {
    this.helloComplete.next(value);
    this.close();
  }

  close() {
    this.helloComplete.complete();
  }
}
