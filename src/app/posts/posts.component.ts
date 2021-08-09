import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from '../model/post';
import {AppService} from '../app.service';
import {User} from '../model/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() public user: User;

  public posts: Array<Post>;
  public limit = 3;
  public moreTxt = 'Get more posts';

  public constructor(private appService: AppService) {}

  public ngOnInit(): void {
    this.appService.read().subscribe((posts: Array<any>) => {
      this.posts = posts;
    });
  }

  public onGetMorePosts(): void {
    if (this.limit > this.user.posts.length) {
      alert('No more posts');
    }
    this.limit += 3;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.limit = 3;
  }
}
