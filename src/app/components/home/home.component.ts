import { CounterService } from './../../shared/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private counter: CounterService) { }

  ngOnInit() {
  }

  onClickCounter():void {
    this.counter.count();
  }

}
