import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '../app/components/posts/posts.component';
import { PostItemComponent } from '../app/components/post-item/post-item.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { OnePostComponent } from './components/one-post/one-post.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: OnePostComponent
  },
  {
    path: '', redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
