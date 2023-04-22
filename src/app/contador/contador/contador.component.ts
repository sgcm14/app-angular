import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <h3>Counter: <strong>{{counter}}</strong></h3>
    <button (click)="increaseBy(base)"> +{{base}} </button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-base)"> -{{base}} </button>
  `
})

export class ContadorComponent {
  title: string = 'Contador App';
  counter: number = 10;
  base: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
