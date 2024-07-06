import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostRequest } from './post.model';
import { CommonModule } from '@angular/common';
import { DataStorageService } from './dataStorage.service';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, AddPostComponent, PostComponent],
})
export class AppComponent {}
