import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() public post: Post;
  @Output() public deletePost: EventEmitter<Post> = new EventEmitter<Post>();

  public hideNotification: boolean;

  constructor() {
    this.hideNotification = false;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.hideNotification = true;
    }, 1000);
  }

  public delete(post: Post): void {
    this.deletePost.emit(post);
  }
}
