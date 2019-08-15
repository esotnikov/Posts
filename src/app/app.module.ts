import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from '../app/components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostService } from './service/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    PageNotFoundComponent,
    OnePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
