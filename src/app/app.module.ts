import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AppHttpService} from './app-http.service';
import {UsersModule} from './users/users.module';
import {PostsModule} from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    UsersModule,
    PostsModule
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
