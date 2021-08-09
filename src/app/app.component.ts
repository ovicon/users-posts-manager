import {Component, OnInit} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: User;
  public isLoaded: any;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }
}
