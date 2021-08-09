import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private httpClient: HttpClient) { }

  public create(): any {
  }

  public read(): Observable<Array<Post>> {
    const r = this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
    return r.pipe(catchError(this.handleError));
  }

  public update(): any {
  }

  public delete(): any {
  }

  private handleError(error: any): any {
    return throwError('Error connecting to server: ' + error.message);
  }
}
