import { Component, Input } from '@angular/core';
import { PostRequest } from '../../../post.model';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() post!: PostRequest;
}
