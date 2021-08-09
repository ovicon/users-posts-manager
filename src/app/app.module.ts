import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AppService} from './app.service';
import {UserPostsPipe} from './common/user-posts.pipe';
import {LimitPipe} from './common/limit.pipe';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPostsPipe,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    UsersModule,
    PostsModule
  ],
  providers: [
    AppService,
    UserPostsPipe,
    LimitPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
