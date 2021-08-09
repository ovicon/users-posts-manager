import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {FormsModule} from '@angular/forms';
import {FilterUsers} from './users-filter.pipe';



@NgModule({
  declarations: [
    UsersComponent,
    FilterUsers
  ],
  providers: [
    UsersService,
    FilterUsers
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
