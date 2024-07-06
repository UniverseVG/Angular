import { Injectable } from '@angular/core';
import { PostRequest } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  postChanged = new Subject<PostRequest[]>();
  constructor() {}

  private posts: PostRequest[] = [];

  getPost() {
    return this.posts.slice();
  }

  setPost(posts: PostRequest[]) {
    this.posts = posts;
    this.postChanged.next(this.posts.slice());
  }
}
