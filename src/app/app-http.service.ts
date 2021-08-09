import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Post} from './model/post';
import {User} from './model/user';

@Injectable()
export class AppHttpService {

  constructor(private httpClient: HttpClient) { }

  public createPost(): any {
  }

  public readAllPosts(): Observable<Array<Post>> {
    const r = this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
    return r.pipe(catchError(this.handleError));
  }

  public updatePostBy(id: number): any {
  }

  public deletePost(id: number): any {
  }

  private handleError(error: any): any {
    return throwError('Error connecting to server: ' + error.message);
  }

  public createUser(user: User): Observable<User> {
    const r = this.httpClient.post<any>('https://jsonplaceholder.typicode.com/users', user);
    return r.pipe(catchError(this.handleError));
  }
}
