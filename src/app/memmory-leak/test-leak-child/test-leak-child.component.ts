import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-test-leak-child',
  templateUrl: './test-leak-child.component.html',
  styleUrls: ['./test-leak-child.component.css']
})
export class TestLeakChildComponent implements OnInit,OnDestroy {

  public counter:number;
  public subscription:Subscription
  constructor() { }
 

  ngOnInit() {
    this.subscription = timer(0,50).pipe(tap(counter=>{
      console.log(`Counter Started at ${moment().format("M/DD/YYYY hh:mm:ss a")} Counter Number: ${counter}`);
    })).subscribe(res=>{
      this.counter = res;
      console.log("in counter",this.counter)
    })
  }

  ngOnDestroy(): void {
    console.log(`Counter Stopped at ${moment().format("M/DD/YYYY hh:mm:ss a")} Counter Number: ${this.counter}`);
  }

}
