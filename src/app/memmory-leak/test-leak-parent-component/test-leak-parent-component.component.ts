import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-leak-parent-component',
  templateUrl: './test-leak-parent-component.component.html',
  styleUrls: ['./test-leak-parent-component.component.css']
})
export class TestLeakParentComponentComponent implements OnInit {
  observableLive = false;
  constructor() { }
  ngOnInit() {
  }
  start(){
    this.observableLive = true;
  }
  public stop(){
    this.observableLive = false;
  } 
}
