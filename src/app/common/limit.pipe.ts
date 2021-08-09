import {Post} from '../model/post';
import {Pipe} from '@angular/core';
import {User} from '../model/user';

@Pipe({ name: 'limit' })
export class LimitPipe {
  public transform(posts: Array<Post>): Array<Post> {
    const r =  posts.filter((value, index) => {
      if (index < 3) {
        return value;
      }
    });
    return r;
  }
}
