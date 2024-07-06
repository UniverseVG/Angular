import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRequest } from './post.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { PostService } from './post.service';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  api: string =
    'https://dummy-data-bc829-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

  constructor(private http: HttpClient, private postService: PostService) {}

  fetchPosts() {
    return this.http.get<PostRequest[]>(this.api).pipe(
      map((data) => {
        const response = Object.values(data);
        return response;
      }),
      tap((data) => this.postService.setPost(data))
    );
  }

  addPost(post: PostRequest) {
    return this.http
      .post<PostRequest>(this.api, {
        ...post,
        id: crypto.randomUUID(),
        views: 100,
      })
      .pipe(switchMap(() => this.fetchPosts()));
  }
}
