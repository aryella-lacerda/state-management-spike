import {makeAutoObservable} from 'mobx';

export class Counter {
  counter = 0;
  skip = 1;

  constructor() {
    makeAutoObservable(this);
  }

  incrementCounter() {
    this.counter += this.skip;
  }

  decrementCounter() {
    this.counter -= this.skip;
  }

  incrementSkip() {
    this.skip = this.skip + 1;
  }

  decrementSkip() {
    this.skip -= 1;
  }
}

export const counterStore = new Counter();
