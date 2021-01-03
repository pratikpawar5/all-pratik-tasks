import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor() { }

  ngOnInit() {
  }
  reveres(){
    this.myArray = [...this.myArray.reverse()];
  }
  trackItem(index,item){
    console.log(index,"index");
    console.log(item,"item");
    return this.myArray ? this.myArray : undefined;
  }
  addValue(){
    let [lastNumber] = this.myArray.slice(-1);
    this.myArray.push(lastNumber + 1);
    console.log(lastNumber)
  }

}
