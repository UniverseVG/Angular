import {
  Component,
  signal,
  Input,
  computed,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  //signal inputs

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  // onSelectUser() {}
  // //Inputs

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // using output functions
  // select = output<string>();
  // using output decorators
  @Output()
  select = new EventEmitter<string>();
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);
  // // get imagePath() {
  // //   return `assets/users/${this.selectedUser().avatar}`;
  // // }
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
