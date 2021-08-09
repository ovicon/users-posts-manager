import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts.component';
import {PostsLimitPipe} from './posts-limit.pipe';



@NgModule({
  declarations: [
    PostsComponent,
    PostsLimitPipe
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
