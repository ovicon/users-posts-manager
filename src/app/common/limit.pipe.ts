import {Post} from '../model/post';
import {Pipe} from '@angular/core';
import {User} from '../model/user';

@Pipe({ name: 'limit' })
export class LimitPipe {
  public transform(posts: Array<Post>, limit: number): Array<Post> {
    debugger;
    let r = [];
    r = posts.filter((value, index) => {
      if (index < limit) {
        return value;
      }
    });
    return r;
  }
}
