import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../model/post';
import {AppService} from '../app.service';
import {User} from '../model/user';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() select = new EventEmitter<User>();

  public users: Array<User> = [];
  private user: User;

  public constructor(private usersService: UsersService) {}

  public ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  public onSelect(user: User): void {
    this.select.emit(user);
  }

  public onDelete(user: User): void {
    alert('todo');
  }
}
