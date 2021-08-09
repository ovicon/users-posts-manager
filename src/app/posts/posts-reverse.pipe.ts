import {Post} from '../model/post';
import {Pipe} from '@angular/core';
import {User} from '../model/user';

@Pipe({ name: 'postsReverse' })
export class PostsReversePipe {
  public transform(posts: Array<Post>): Array<Post> {
    return posts.reverse();
  }
}
