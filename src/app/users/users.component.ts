import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() selected = new EventEmitter<User>();

  public users: Array<User>;
  public userIdColumnHeaderTxt;
  public nrOfPostsColumnHeaderTxt;
  public actionsColumnHeaderTxt;
  public isFilterEnabled: boolean;
  public userId: string;
  public nrOfPosts: string;
  public selectedUser: User;
  public editUser = false;
  public deleteUser = false;

  public constructor(private usersService: UsersService) {}

  public ngOnInit(): void {
    this.getTranslations();
    this.getUsers();
  }

  private getTranslations(): void {
    this.userIdColumnHeaderTxt = 'User ID';
    this.nrOfPostsColumnHeaderTxt = 'Number of posts';
    this.actionsColumnHeaderTxt = 'Actions';
  }

  private getUsers(): void {
    const s = this.usersService.getUsers().subscribe(value => {
      this.users = value;
      s.unsubscribe();
    });
  }

  public createUser(): void {
    let tempUserId = -1;
    this.users.forEach(user => {
      if (tempUserId < user.userId) {
        tempUserId = user.userId;
      }
    });
    const u = new User();
    u.userId = ++tempUserId;
    u.posts = [];
    setTimeout(() => {
      this.users.push(u);
    });
  }

  public select(user: User): void {
    this.selectedUser = user;
    this.selected.emit(user);
  }

  public preDelete(user: User): void {
    this.selectedUser = user;
    this.deleteUser = !this.deleteUser;
  }

  public delete(user: User): void {
    this.selectedUser = null;
    this.deleteUser = !this.deleteUser;
    this.users = this.users.filter(u => u.userId !== user.userId);
    this.select(null);
  }

  public preEdit(user: User): void {
    this.selectedUser = user;
    this.editUser = !this.editUser;
  }

  public toggleFiltering(): void {
    this.isFilterEnabled = !this.isFilterEnabled;
  }

  public deleteAllPPostsFor(selectedUser: User): void {
    this.selectedUser.posts = [];
  }
}
