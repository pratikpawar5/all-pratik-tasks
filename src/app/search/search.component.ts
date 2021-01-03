import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime,distinctUntilChanged,startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField:FormControl;
  @Output() search = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
    var self = this;
    self.searchField = new FormControl();
    self.searchField.valueChanges.pipe(debounceTime(500),distinctUntilChanged(),startWith('')).subscribe(data=>{
      this.search.emit(data);
    }); 
  }

}
