import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  postsArray: IPost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().then(data => {
      this.postsArray = data;
    });
  }

}
