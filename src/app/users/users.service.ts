import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Post} from '../model/post';
import {AppService} from '../app.service';
import {User} from '../model/user';

@Injectable()
export class UsersService {

  constructor(private appService: AppService) { }

  public getUsers(): Observable<Array<User>> {
    this.appService.read().subscribe(posts => {

    });
    return of(posts);
  }
}
