import { Component, OnInit } from '@angular/core';
import { BehaviorSubject,combineLatest, Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  search$ = new Subject<string>();
  data=[{
    title:'Pratik Sudam Pawar',
    description:'I am a description 1'
  },
  {
    title:'Abhishek Kashid',
    description:'I am a description 2'
  },
  {
    title:'Abhijit Gawari',
    description:'I am a description 3'
  },
  {
    title:'Abhishek Charwad',
    description:'I am a description 4'
  },
  {
    title:'Akshay Gunjal',
    description:'I am a description 5'
  },
  {
    title:'Heading 6',
    description:'I am a description 6'
  }];

  finalVideos:any[];
  
  videos$ = new BehaviorSubject<any[]>(this.data); 
  isAlive = true;
  ngOnInit(){
    combineLatest([this.search$,this.videos$]).pipe(takeWhile(()=>this.isAlive = true)).subscribe(res=>{
      const search = res[0];
      const videos = res[1];
      if (!search) {
        this.finalVideos = videos;
      } else {
        this.finalVideos = videos.filter((video) => video.title.toLowerCase()
          .indexOf(search.toLowerCase()) !== -1);
      }    })
  }
  searchEvent(event)
  {
    this.search$.next(event);
    console.log(event,"event")
  }
}
