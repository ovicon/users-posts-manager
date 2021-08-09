import {Post} from './model/post';
import {Pipe} from '@angular/core';
import {User} from './model/user';

@Pipe({ name: 'userPosts' })
export class UserPostsPipe {
  public transform(posts: Array<Post>): Array<User> {
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
}
