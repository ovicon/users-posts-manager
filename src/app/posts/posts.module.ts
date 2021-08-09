import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {PostsLimitPipe} from './posts-limit.pipe';
import {PostComponent} from './post/post.component';
import {PostsReversePipe} from './posts-reverse.pipe';
import {LoadingModule} from '../common/loading/loading.module';
import {DialogModule} from '../common/dialog/dialog.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostsLimitPipe,
    PostsReversePipe,
    PostComponent,
    PostComponent,
  ],
  providers: [
    PostsLimitPipe,
    PostsReversePipe
  ],
  imports: [
    CommonModule,
    LoadingModule,
    DialogModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
