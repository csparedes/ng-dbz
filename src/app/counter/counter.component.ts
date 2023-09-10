import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <span>Contador: {{counter}}</span>
  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="increaseBy(-1)" >-1</button>
  <button (click)="resetCounter()" >Reset</button>
  `
})

export class CounterComponent implements OnInit {
  public counter: number = 0;

  constructor() { }

  ngOnInit() { }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
