import { CounterService } from './../../shared/services/counter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;

  constructor(private route:ActivatedRoute,private router:Router, private counter: CounterService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }
  
  goBack():void{
    this.router.navigate(['home'])
  }

  onClickCounter():void {
    this.counter.count();
  }

}
