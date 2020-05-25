import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactiveCounter= 0;
  inactiveToActiveCounter= 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log(`Active to Inactive user movements: ${this.activeToInactiveCounter}`);
  }

  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log(`Inactive to Active user movements: ${this.inactiveToActiveCounter}`);
  }
}
