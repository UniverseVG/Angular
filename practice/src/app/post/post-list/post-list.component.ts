import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostRequest } from '../../post.model';
import { PostItemComponent } from './post-item/post-item.component';
import { PostService } from '../../post.service';
import { DataStorageService } from '../../dataStorage.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  imports: [PostItemComponent, CommonModule],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: PostRequest[] = [];
  subscription!: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchPosts().subscribe();
    this.postService.getPost();
    this.subscription = this.postService.postChanged.subscribe(
      (data: PostRequest[]) => {
        this.posts = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
