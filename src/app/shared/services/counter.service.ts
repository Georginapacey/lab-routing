import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countNumber: number = 0;

  constructor() { }

  count():void {
    this.countNumber++;
  }
}
