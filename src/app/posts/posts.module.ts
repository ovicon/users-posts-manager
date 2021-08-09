import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts.component';
import {PostsLimitPipe} from './posts-limit.pipe';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostsLimitPipe,
    PostComponent,
    PostComponent,
  ],
  providers: [
    PostsLimitPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
