import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {
  post: IPost;

  constructor(private route: ActivatedRoute, private postService: PostService) {}


  ngOnInit() {
    this.route.paramMap.subscribe(params => this.getOnePost(+params.get('id')));
  }


  getOnePost(id: number) {
    this.postService.getPost(id).then(data => {
        this.post = data;
    });
  }

}

