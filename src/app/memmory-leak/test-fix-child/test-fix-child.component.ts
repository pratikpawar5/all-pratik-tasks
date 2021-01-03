import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-test-fix-child',
  templateUrl: './test-fix-child.component.html',
  styleUrls: ['./test-fix-child.component.css']
})
export class TestFixChildComponent implements OnInit {

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
    this.subscription.unsubscribe();
    console.log(`Counter Stopped at ${moment().format("M/DD/YYYY hh:mm:ss a")} Counter Number: ${this.counter}`);
  }

}
