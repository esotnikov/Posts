import { Injectable } from '@angular/core';
import { IPost } from '../models/post';

@Injectable()
export class PostService {
    getPosts(): Promise<IPost[]> {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => posts.map(post => {
                return {
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.body
                };
            }));
    }

    getPost(id: number): Promise<IPost> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                return {
                  userId: post.userId,
                  id: post.id,
                  title: post.title,
                  body: post.body
                };
            });
    }
}
