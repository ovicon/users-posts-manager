import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Post} from '../model/post';
import {AppHttpService} from '../app-http.service';
import {User} from '../model/user';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [DatePipe]
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() public user: User;

  public posts: Array<Post>;
  public limit = 0;
  public userIdColumnHeaderTxt;
  public idColumnHeaderTxt;
  public titleColumnHeaderTxt;
  public bodyColumnHeaderTxt;
  public moreTxt = 'Get next post';
  public nowDate: string;
  public deletePost: boolean;
  public selectedPost: Post;

  public constructor(private appService: AppHttpService, private datePipe: DatePipe) {}

  public ngOnInit(): void {
    this.getTranslations();
    this.getLimitOfPosts();
  }

  private getTranslations(): void {
    this.userIdColumnHeaderTxt = 'User ID';
    this.idColumnHeaderTxt = 'ID';
    this.titleColumnHeaderTxt = 'Title';
    this.bodyColumnHeaderTxt = 'Body';
  }

  public onGetNextPost(): void {
    if (this.limit > this.user.posts.length) {
      alert('No more posts');
    }
    this.nowDate = this.datePipe.transform(new Date(), 'yyyy-mm-dd hh-mm-ssz');
    this.limit += 1;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.nowDate = this.datePipe.transform(new Date(), 'yyyy-mm-dd hh-mm-ssz');
    if (!changes.user.firstChange) {
      this.getLimitOfPosts();
    }
  }

  public preDelete(post: Post): void {
    this.deletePost = !this.deletePost;
    this.selectedPost = post;
  }

  public delete(post: Post): void {
    this.selectedPost = null;
    this.user.posts = this.user.posts.filter(p => p.id !== post.id);
    this.limit += -1;
  }

  private getLimitOfPosts(): void {
    this.limit = 1;
  }
}
