import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLeakParentComponentComponent } from './memmory-leak/test-leak-parent-component/test-leak-parent-component.component';
import { SearchComponent } from './search/search.component';
import { TrackByComponent } from './track-by/track-by.component';

const routes: Routes = [
  {path:'',component:SearchComponent
  },
  {path:'track-by',component:TrackByComponent
  },
  {path:'memory-leak',component: TestLeakParentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
