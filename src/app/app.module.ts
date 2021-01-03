import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { TrackByComponent } from './track-by/track-by.component';
import { TestLeakChildComponent } from './memmory-leak/test-leak-child/test-leak-child.component';
import { TestLeakParentComponentComponent } from './memmory-leak/test-leak-parent-component/test-leak-parent-component.component';
import { TestFixChildComponent } from './memmory-leak/test-fix-child/test-fix-child.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoListComponent,
    VideoCardComponent,
    TrackByComponent,
    TestLeakChildComponent,
    TestLeakParentComponentComponent,
    TestFixChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
