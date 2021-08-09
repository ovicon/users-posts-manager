import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from '../model/post';
import {AppHttpService} from '../app-http.service';
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
  public userIdColumnHeaderTxt;
  public idColumnHeaderTxt;
  public titleColumnHeaderTxt;
  public bodyColumnHeaderTxt;
  public moreTxt = 'Get more posts';

  public constructor(private appService: AppHttpService) {}

  public ngOnInit(): void {
    this.getTranslations();
  }

  private getTranslations(): void {
    this.userIdColumnHeaderTxt = 'User ID';
    this.idColumnHeaderTxt = 'ID';
    this.titleColumnHeaderTxt = 'Title';
    this.bodyColumnHeaderTxt = 'Body';
  }

  public onGetMorePosts(): void {
    if (this.limit > this.user.posts.length) {
      alert('No more posts');
    }
    this.limit += 1;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.limit = 2;
  }

  public deletePost(post: Post): void {
    this.user.posts = this.user.posts.filter(p => p.id !== post.id);
  }
}
