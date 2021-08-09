import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../model/post';
import {AppHttpService} from '../app-http.service';
import {User} from '../model/user';

@Injectable()
export class UsersService {

  constructor(public appService: AppHttpService) { }

  public getUsers(): Observable<Array<User>> {
    return this.appService.readAllPosts().pipe(map(posts => {
      return this.getUsersFrom(posts);
    }));
  }

  private getUsersFrom(posts: Array<Post>): Array<User> {
    const users = new Array<User>();
    const userIds = new Set<number>();

    // 1 create user list
    posts.forEach(post => userIds.add(post.userId));
    userIds.forEach(userId => {
      const user = new User();
      user.userId = userId;
      user.posts = [];
      users.push(user);
    });

    // 2 fill with posts
    users.forEach(user => {
      posts.forEach(post => {
        if (user.userId === post.userId) {
          const p = new Post();
          p.userId = post.userId;
          p.id = post.id;
          p.title = post.title;
          p.body = post.body;
          user.posts.push(p);
        }
      });
    });

    return users;
  }

  public create(u: User): void {
    const s = this.appService.createUser(u).subscribe(value => {
      console.log('User created');
      s.unsubscribe();
    });
  }
}
