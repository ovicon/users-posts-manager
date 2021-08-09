import {Pipe} from '@angular/core';
import {User} from '../model/user';

@Pipe({ name: 'filterUsers' })
export class FilterUsers {

  private result: Array<User> = [];

  public transform(users: Array<User>, userId: string, nrOfPosts: string): Array<User> {
    this.result = users;
    this.filterByUserId(userId);
    this.filterByNumberOfPosts(nrOfPosts);
    return this.result;
  }

  private filterByNumberOfPosts(nrOfPosts: string): void {
    if (nrOfPosts) {
      this.result = this.result.filter(user => user.posts.length === Number.parseInt(nrOfPosts, 10));
    }
  }

  private filterByUserId(userId: string): void {
    if (userId) {
      this.result = this.result.filter(user => user.userId.toString().includes(userId));
    }
  }
}
