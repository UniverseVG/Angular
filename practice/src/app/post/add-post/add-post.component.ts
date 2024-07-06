import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataStorageService } from '../../dataStorage.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  @ViewChild('f') postForm!: NgForm;
  constructor(private dataStorageService: DataStorageService) {}

  onSubmit() {
    console.log(this.postForm.value);
    this.dataStorageService.addPost(this.postForm.value).subscribe(() => {
      console.log('POST ADDED');
    });
    this.postForm.reset();
  }
}
